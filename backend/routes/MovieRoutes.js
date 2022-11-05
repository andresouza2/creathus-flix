const router = require('express').Router()
const FilmController = require('../controllers/MovieController')

const { imageUpload } = require('../helpers/image-upload')

router.post('/register', imageUpload.single('image'), FilmController.register);
router.get('/', FilmController.getAll);
router.get('/:id', FilmController.getMovieById);

module.exports = router