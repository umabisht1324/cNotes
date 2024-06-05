const express = require('express');
const router = express.Router();
const { getAllUsers, createUser ,authenticate} = require('../models/User');

// Get all users (for testing purposes)
router.get('/', (req, res) => {
  getAllUsers((err, users) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(users);
  });
});

// Create a new user
router.post('/', (req, res) => {
  const newUser = req.body; // Get user data from request body
  createUser(newUser, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database insert error' });
    }
    res.json({ success: true, userId: result.insertId });
  });
});

// login

router.post('/', (req, res) => {
  const user = req.body;

  authenticate(user, (err, message) => {
    if (err) {
      return res.status(401).send(err); // Unauthorized
    }
    res.status(200).send(message); // Success
  });
});

module.exports = router;
