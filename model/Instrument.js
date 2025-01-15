const { default: mongoose } = require("mongoose")

const instrumentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Instrument = mongoose.model("Intruments", instrumentSchema);

module.exports = Instrument;