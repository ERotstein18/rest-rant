//for modules & globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//for controllers & routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('404 page')
})

//for Connections
app.listen(process.env.PORT)
