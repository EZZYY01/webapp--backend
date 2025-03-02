# Music Ecommerce Webapp - Backend

Welcome to the backend of the Music Ecommerce Webapp! This project is part of the **MERN stack** application, where we provide a system for selling and renting music instruments and accessories. The backend is built with **Node.js**, **Express**, and **MongoDB** for data storage.

## Features
- API for managing product listings, user accounts, and orders.
- User authentication and authorization (JWT-based).
- Payment integration with **Stripe** for handling transactions.
- Ability to rent or purchase instruments and accessories.

## Setup

### Prerequisites

Before you start, make sure you have the following installed:

- Node.js (v12 or above)
- MongoDB running locally or a cloud MongoDB instance (e.g., MongoDB Atlas)
- Stripe account for payment integration

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/music-ecommerce-backend.git
   cd music-ecommerce-backend
Install dependencies:

bash
Copy
npm install
Set up environment variables:

Create a .env file at the root of the project and add the following variables:

env
Copy
MONGO_URI=mongodb://localhost:27017/music-ecommerce
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
Initialize MongoDB if you're running it locally.

Running the Application
To start the backend server:

bash
Copy
npm run dev
This will start the backend server on http://localhost:5000.

API Documentation
POST /api/auth/register - Register a new user.
POST /api/auth/login - Login with existing user credentials.
GET /api/products - Get a list of all products.
GET /api/products/:id - Get product details by ID.
POST /api/orders - Place a new order.
POST /api/rentals - Create a rental order.
Directory Structure
models/ - Mongoose models for MongoDB (User, Product, Order, etc.)
routes/ - Express routes for handling API requests
controllers/ - Logic for handling requests and interacting with the database
middlewares/ - Middleware functions (e.g., for authentication)
config/ - Configuration files (e.g., for Stripe, JWT)
Future Updates
Admin Panel: A well-managed admin panel will be added to help manage products, orders, and users.
Rental System Enhancement: The rental system will be updated to provide better features and management for rentals.
Contributing
We welcome contributions! Please submit issues or pull requests, following the standard Git flow.

