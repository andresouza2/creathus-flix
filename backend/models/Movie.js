const mongoose = require('../db/conn');
const { Schema } = mongoose;

const movieSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false }
}, { timestamps: true })

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie