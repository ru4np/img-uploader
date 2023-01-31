const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) // Nome das imagens vão ser salvas com o tempo real em milisegundos
    }
})

const upload = multer({ storage })

module.exports = upload