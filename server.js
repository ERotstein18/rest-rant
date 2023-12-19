// Modules and Globals
require('dotenv').config();
const express = require('express')
const app = express();
const methodOverride = require("method-override");
const mongoose = require('mongoose')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static('public'));

// Controllers & Routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.render('error404');
});

//Connect to your mongodb and listen on port given by env 
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongo: ', process.env.MONGO_URI))


// Listen for Connections
app.listen(process.env.PORT)
