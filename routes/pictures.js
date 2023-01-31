const express = require('express');
const router = express.Router();

const PictureController = require('../controllers/picturesController')
const upload = require('../config/multer')

router.post("/", upload.single("file"), PictureController.create);
router.get("/", PictureController.findAll)
router.delete('/:id', PictureController.remove)
module.exports = router