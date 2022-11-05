const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static('public'))

// Routes
const MovieRoutes = require('./routes/MovieRoutes')
app.use('/movies', MovieRoutes)

app.listen(process.env.PORT || 3030);