require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

// Import routes
const authRoutes = require('./routes/auth.routes');
const noteRoutes = require('./routes/note.routes');

// Initialize Express
const app = express();

// Connect to database
const connectDB = require('./config/database');
connectDB();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);


app.get('/', (req, res) => {
  res.send('Notes API is running');
});


// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});