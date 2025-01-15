const Customer = require("../model/Customer")

const findAll = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (e) {
        res.json(e)
    }
}

const save = async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).json(customer);
    } catch (e) {
        res.json(e)
    }
}

const findById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.status(200).json(customer)
    } catch (e) {
        res.json(e)
    }
}

const deleteById = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.status(200).json({ message: "Customer deleted successfully" });
    } catch (e) {
        res.status(500).json({ error: "Internal Server Error", details: e.message });
    }
};


const update = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(customer)
    } catch (e) {
        res.json(e)
    }
}


module.exports = {
    findAll,
    save,
    findById,
    deleteById,
    update
}