const express = require("express");
const router = express.Router();
const { findAll, save, findById, deleteById, update } = require("../controller/InstrumentController");

const multer = require("multer")
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'instrument_images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage });

router.get("/", findAll);
router.post("/", upload.single('file'), save);
router.get("/:id", findById);
router.get("/:id", deleteById);
router.get("/:id", update);




module.exports = router;

