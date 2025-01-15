const Instrument = require("../model/Instrument")

const findAll = async (req, res) => {
    try {
        const instruments = await Instrument.find();
        res.status(200).json(instruments);
    } catch (e) {
        res.json(e)
    }
}

const save = async (req, res) => {
    try {
        const { name, cost, description } = req.body
        const instrument = new Instrument({
            name,
            cost,
            description,
            image: req.file.originalname
        });
        await instrument.save();
        res.status(201).json(instrument);
    } catch (e) {
        res.json(e)
    }
}

const findById = async (req, res) => {
    try {
        const instrument = await Instrument.findById(req.params.id);
        res.status(200).json(instrument)
    } catch (e) {
        res.json(e)
    }
}

const deleteById = async (req, res) => {
    try {
        const instrument = await Instrument.findByIdAndDelete(req.params.id);
        if (!instrument) {
            return res.status(404).json({ message: "Instrument not found" });
        }
        res.status(200).json({ message: "Instrument deleted successfully" });
    } catch (e) {
        res.status(500).json({ error: "Internal Server Error", details: e.message });
    }
};


const update = async (req, res) => {
    try {
        const instrument = await Instrument.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(instrument)
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