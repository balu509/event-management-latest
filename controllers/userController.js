const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { findUserByUsername, addUser } = require('../models/userModel');

const JWT_SECRET = 'your_jwt_secret';

const registerUser = async (req, res) => {
    const { username, password, email } = req.body;

    if (findUserByUsername(username)) {
        return res.status(400).render('register', { message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, username, password: hashedPassword, email };
    addUser(newUser);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: 'your_email@gmail.com', pass: 'your_password' }
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Registration Successful',
        text: `Hello ${username}, you have successfully registered!`
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.status(500).render('register', { message: 'Error sending email' });
        }
        res.status(201).render('login', { message: 'Registration successful, please log in' });
    });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = findUserByUsername(username);

    if (!user) {
        return res.status(400).render('login', { message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).render('login', { message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token).redirect('/events');
};

module.exports = { registerUser, loginUser };
