const express = require('express');
const router = express.Router();

app = express();

router.post('/', (req, res) => {
    res.send('signed in');
});

module.exports = router;