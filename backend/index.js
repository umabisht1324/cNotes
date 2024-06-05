const express = require('express');
const cors = require('cors');
const { connectToMysql } = require('./db');

const app = express();
const port = 4000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // React app's address
}));

// Connect to MySQL
connectToMysql();

// Available routes


// app.use(express.json());

app.post('/api/auth', (req, res) => {
  // try {
  //   console.log('Request received:', req.body);

  //   // Simulate an error for demonstration purposes
  //   if (!req.body.email || !req.body.password) {
  //     throw new Error('Missing email or password');
  //   }

  //   // Simulate successful processing
  //   res.json({ message: 'Authentication successful', data: req.body });
  // } catch (error) {
  //   console.error('Error occurred:', error.message);
  //   res.status(500).json({ error: 'Internal Server Error', message: error.message });
  // }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
