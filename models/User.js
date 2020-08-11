const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name is required',
    },
    lastName: {
        type: String,
        required: 'Last name is required',
    },
    email: {
        type: String,
        required: 'Email is required',
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid email format'],
        validate: {
            validator: function(v){
                return this.model('User').findOne({ email: v }).then(user => !user)
            },
            message: props => `${props.value} is already used by another user`
        },
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;