const express = require("express");
const router = express.Router();
const { findAll, save, findById, deleteById, update } = require("../controller/CustomerController");


router.get("/", findAll);
router.post("/", save);
router.get("/:id", findById);
router.get("/:id", deleteById);
router.get("/:id", update);




module.exports = router;

