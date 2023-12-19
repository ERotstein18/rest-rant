// Modules and Globals
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require("method-override");


const app = express();


// Express Settings
app.use(methodOverride("_method"));
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

// Controllers & Routes
app.use('/places', require('./controllers/places'));

//404 not found page
app.get('*', (req, res) => {
    res.render('error404');
});

//Connect to your mongodb and listen on port given by env 
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongo: ', process.env.MONGO_URI))


// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
  })