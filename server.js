// Load environment variables from .env file
require("dotenv").config();

// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Import routers
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");
const rentRoutes = require('./routes/shop/rent');

const commonFeatureRouter = require("./routes/common/feature-routes");

// Log the Mongo URI to verify that it's loaded correctly
console.log("Mongo URI:", process.env.mongo_uri);

// Connect to MongoDB using the URI from the environment variable
mongoose
  .connect(process.env.mongo_uri)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Initialize Express app
const app = express();

// Set up the server port
const PORT = process.env.PORT || 5002;

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173",  // Frontend URL for development
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,  // Allow credentials (cookies, headers)
  })
);

// Middleware for parsing cookies and JSON
app.use(cookieParser());
app.use(express.json());

// Define routes
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);
app.use('/api', rentRoutes);

app.use("/api/common/feature", commonFeatureRouter);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
