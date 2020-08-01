const express = require('express');
const router = express.Router();
const { signInUser } = require('../controllers/users');
const passport = require('passport');

router.route('/').post(signInUser);
// router.post('/', (req, res, next) => {
//     console.log('sign in user..')
//     res.send('signed in');
// });

module.exports = router;