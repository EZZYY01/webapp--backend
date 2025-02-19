const express = require("express")
const connectDb = require("./config/db")
const CustomerRouter = require("./routes/CustomerRoute")
const InstrumentRouter = require("./routes/InstrumentRoute")
const BookingRouter = require("./routes/BookingRoute")
const AuthRouter = require("./routes/AuthRoute")

const app = express();

connectDb();

app.use(express.json());

app.use("/api/customer", CustomerRouter);
app.use("/api/instrument", InstrumentRouter);
app.use("/api/booking", BookingRouter);
app.use("/api/auth", AuthRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})