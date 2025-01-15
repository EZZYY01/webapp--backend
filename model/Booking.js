const { default: mongoose } = require("mongoose");
const Instrument = require("./Instrument");

const bookSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers"
    },
    instrumentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Intruments"
    },
    date: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    timeFrom: {
        type: String,
        required: true
    },
    timeTo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

const Book = mongoose.model("books", bookSchema);

module.exports = Book;