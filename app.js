const express = require('express');
require('dotenv').config();
const app = express();
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(userRoutes);
app.use(eventRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});