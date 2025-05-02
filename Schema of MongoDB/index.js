require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Import routes
const productRoutes = require('./routes/product.routes');

// Initialize Express
const app = express();

// Middleware
app.use(express.json());


// Database connection
const connectDB = require('./config/database');
connectDB();

// Routes
app.use('/api/products', productRoutes);

// Route  =  GET /api/products/vendor
// @desc     Get all products by vendor (using _id)


app.get('/', (req, res) => {
  res.send('Ecommerce API is running');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});