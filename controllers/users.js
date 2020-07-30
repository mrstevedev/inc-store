const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        })
    } catch(err) {
        res.status(500).json({ error: 'Server error' })
    }
}

// @desc Register a user
// @route POST /api/users 
// @access Public
exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = {
        firstName,
        lastName,
        email,
        password: hash
    }
    try {
        console.log('Registering user...');
        const user = await User.create(newUser);
        console.log('User created successfully.');
        return res.status(200).json({ success: true, data: user });
    } catch(err) {
        console.log(err)
    }
}