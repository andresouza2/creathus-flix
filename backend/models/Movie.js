const mongoose = require('../db/conn');
const { Schema } = mongoose;

const Movie = mongoose.model(
  'Movie',
  new Schema({
    author: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String
    }
  },
    { timestamps: true },
  ),
)

module.exports = Movie