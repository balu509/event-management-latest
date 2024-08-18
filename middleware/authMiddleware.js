const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret';

const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).redirect('/login');
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).redirect('/login');
        }
        req.user = user;
        next();
    });
};

module.exports = { authenticateToken };
