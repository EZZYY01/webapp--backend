const Rent = require('../../models/Rent'); // Rent model
const Product = require('../../models/Product'); // Product model

// Create Rent
const createRent = async (req, res) => {
    try {
        const { userId, productName, rentalDetails } = req.body;

        // Find product by name
        const product = await Product.findOne({ name: productName });

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Create the rent entry using product's ID
        const newRent = new Rent({
            userId,
            productId: product._id,  // Saving product's ObjectId
            rentalPeriod: rentalDetails.rentalPeriod,
            status: "rented", // New rent status initially
        });

        await newRent.save();

        return res.status(201).json({
            success: true,
            message: "Product rented successfully!",
            data: newRent,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create rent",
            error: error.message,
        });
    }
};

// Get All Rents for a User
const getAllRents = async (req, res) => {
    const { userId } = req.params;

    try {
        const rents = await Rent.find({ userId });

        if (!rents || rents.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No rents found for this user",
            });
        }

        return res.status(200).json({
            success: true,
            data: rents,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve rents",
            error: error.message,
        });
    }
};

// Update Rent Status (e.g., when the product is returned)
const updateRentStatus = async (req, res) => {
    const { rentId } = req.params;
    const { status } = req.body;

    if (!status || !["rented", "returned"].includes(status)) {
        return res.status(400).json({
            success: false,
            message: "Invalid status. Status must be 'rented' or 'returned'.",
        });
    }

    try {
        // Find rent by rentId
        const rent = await Rent.findById(rentId);

        if (!rent) {
            return res.status(404).json({
                success: false,
                message: "Rent not found",
            });
        }

        // Update the status
        rent.status = status;
        await rent.save();

        return res.status(200).json({
            success: true,
            message: `Rent status updated to ${status}`,
            data: rent,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to update rent status",
            error: error.message,
        });
    }
};

module.exports = {
    createRent,
    getAllRents,
    updateRentStatus,
};
