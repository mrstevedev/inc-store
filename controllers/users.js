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
    try {
        console.log('Registering user...');
        console.log(req.body);

        // Get password to salt
        
        // const saltRounds = 10;

        // bcrypt.genSalt(saltRounds, function(err, salt) {
        //     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        //         // Store hash in your password DB.
        //     });
        // });

        const user = await User.create(req.body);
        return res.status(200).json({ success: true, data: user });
    } catch(err) {
        console.log(err)
    }
}