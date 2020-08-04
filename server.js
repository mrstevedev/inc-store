const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const helmet = require('helmet');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

// Load env vars
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// Add both to retrieve req.body from form POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser('secret'))
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Passport config 
require('./config/passport')(passport);

app.use(morgan('dev'));

app.use(helmet());

app.use(cors({
    origin: 'http://localhost:5001',
    credentials: true
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/signin', require('./routes/signin'));
app.use('/api/users', require('./routes/api/users/signup'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${ PORT }`));