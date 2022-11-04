const multer = require('multer');
const path = require('path');

// Destination to store the images
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "";

    if (req.baseUrl.includes("movies")) {
      folder = "movies";
    } else {
      console.log('sem filmes')
    }

    cb(null, `public/img/${folder}`)

  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  },
})

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error('Por favor, envie apenas jpg ou png!'))
    }
    cb(undefined, true);
  }
})

module.exports = { imageUpload }