const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');

// router.get('/', (req, res) => {
//     res.send('Welcome to the API');
//   });
  

// Create a new user with strong password rules and email & full name validation
router.post('/create', async (req, res) => {
console.log('Received request body:', req.body);
  const { fullName, email, password } = req.body;
  console.log('Received email:', email);
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email format');
  }

  // Validate full name
  if (!fullName || fullName.length < 3) {
    return res.status(400).send('Full name must be at least 3 characters');
  }

  // Validate password strength
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).send('Password must be at least 8 characters, doesnot include special characters and include both letters and numbers');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    fullName,
    email,
    password: hashedPassword,
  });

newUser.save()
  .then(() => {
    res.status(201).send('User created successfully');
  })
  .catch((err) => {
    res.status(500).send('Error creating user');
  });
});

// Update user details (full name and password only)


router.put('/edit', async (req, res) => {
    const { fullName, password, email } = req.body;
  
    try {
      // Validate full name
      if (fullName && fullName.length < 3) {
        return res.status(400).send('Full name must be at least 3 characters');
      }
  
      // Validate password strength
      if (password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
          return res.status(400).send('Password must be at least 8 characters, doesnot include special characters and include both letters and numbers');
        }
      }
  
      // Find the user
      const foundUser = await User.findOne({ email });
  
      if (!foundUser) {
        return res.status(404).send('User not found');
      }
  
      // Update full name and/or password
      if (fullName) foundUser.fullName = fullName;
      if (password) foundUser.password = await bcrypt.hash(password, 10);
  
      // Save the updated user
      await foundUser.save();
  
      res.status(200).send('User details updated successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating user');
    }
  });
  

// Delete user by email
router.delete('/delete', async (req, res) => {
    const { email } = req.body;
  
    try {
      const deletedUser = await User.findOneAndDelete({ email });
  
      if (!deletedUser) {
        return res.status(404).send('User not found');
      }
  
      res.status(200).send('User deleted successfully');
    } catch (error) {
      res.status(500).send('Error deleting user');
    }
  });

// Get all users' full name, email addresses, and hashed passwords
router.get('/getAll', (req, res) => {

  User.find({}, 'fullName email password')
  .then((users) => {
    res.status(200).json(users);
  })
  .catch((err) => {
    res.status(500).send('Error retrieving user data');
  });
});

module.exports = router;
