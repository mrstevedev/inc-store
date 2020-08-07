const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');

// @desc Get a single user
// @route POST /api/users 
// @access Private
exports.signInUser = async (req, res, next) => {
   passport.authenticate('local', (err, user, info) => {
    if(err) throw err;
    if(!user) res.send('No user exists')
    else {
        req.logIn(user, err => {
            if(err) throw err;
            res.status(200).json({ message: 'Successfully Authenticated', user: req.user })
        })
    }
   })(req, res, next)
}

// @desc Get all users
// @route POST /api/users 
// @access Private
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
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hash
    });
    try {
        console.log('Registering user...');
        const user = await User.create(newUser);
        console.log('User created successfully.');
        return res.status(200).json({ success: true, data: user });
    } catch(err) {
        res.send(err)
    }
}