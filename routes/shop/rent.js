const express = require("express");
const router = express.Router();
const {
    createRent,
    getAllRents,
    updateRentStatus,
} = require("../../controllers/shop/rent-controller");

// Create a rent
router.post("/rent", createRent);

// Get all rents for a user
router.get("/rents/:userId", getAllRents);

// Update rent status (e.g., when the product is returned)
router.put("/rent/:rentId/status", updateRentStatus);

module.exports = router;
