const express = require("express");
const router = express.Router();
const { findAll, save, findById, deleteById, update } = require("../controller/CustomerController");
const CustomerValidation = require("../validation/CustomerValidation")

router.get("/", findAll);
router.post("/", CustomerValidation, save);
router.get("/:id", findById);
router.get("/:id", deleteById);
router.get("/:id", update);




module.exports = router;

