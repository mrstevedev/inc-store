const express = require('express');
const { getUsers, registerUser } = require('../../../controllers/users');
const router = express.Router();

router.route('/').get(getUsers).post(registerUser);

module.exports = router;