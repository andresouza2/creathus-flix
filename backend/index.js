const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static('public'))

const MovieRoutes = require('./routes/MovieRoutes')

// Routes
app.use('/movies', MovieRoutes)

app.listen(5000)