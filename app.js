require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');


const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Access assets as css, img, js
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');// Template mastering
app.set('view engine', 'ejs');


// app.get('/', (req, res) => {
//     res.send('As-Salamualaikum');
// });
app.use('/', require('./server/routes/main'));


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});