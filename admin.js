const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
require("dotenv").config();
const User = require('./models/User');  // Path to your User model

// Connect to MongoDB
mongoose.connect((process.env.mongo_uri), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const createAdmin = async () => {
    try {
        const password = 'adminpassword'; // Admin password
        const hashedPassword = await bcrypt.hash(password, 12);

        const adminUser = new User({
            userName: 'Admin',
            email: 'admin@example.com',
            password: hashedPassword,
            role: 'admin', // Set role as 'admin'
        });

        await adminUser.save();
        console.log('Admin user created successfully!');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error creating admin user:', error);
        mongoose.connection.close();
    }
};

createAdmin();
