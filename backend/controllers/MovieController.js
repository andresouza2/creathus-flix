const Movie = require('../models/Movie');

module.exports = class FimlController {
  static async register(req, res) {

    const { author, title, description } = req.body;

    let image = ''

    if (req.file) {
      image = req.file.filename
    }

    //validations
    if (!author) {
      res.status(422).json({ message: 'O nome do autor é obrigatório!' });
      return
    }

    if (!title) {
      res.status(422).json({ message: 'O título é obrigatório!' });
      return
    }

    if (!description) {
      res.status(422).json({ message: 'A descrição é obrigatória!' });
      return
    }

    const movieExists = await Movie.findOne({ title: title });

    if (movieExists) {
      res.status(422).json({
        message: 'Filme já cadastrado, por favor cadastre outro filme'
      });
      return;
    }

    // create a movie
    const movie = new Movie({
      author,
      title,
      description,
      image: image,
    })

    try {
      const newMovie = await movie.save();
      res.status(201).json({ message: 'Filme cadastrado com sucesso!', newMovie, })

    } catch (error) {
      res.status(500).json({ message: error })
    }
  }

  static async getAll(req, res) {
    const movies = await Movie.find().sort('-createdAt');
    res.status(200).json({ message: 'success', total: movies.length, movies })
  }

  static async getMovieById(req, res) {

    const id = req.params.id;
    const movie = await Movie.findById(id);

    if (!movie) {
      res.status(422).json({ message: 'filme não encontrado' });
      return
    }

    res.status(200).json(movie)
  }
}