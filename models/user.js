const mongoose = require('mongoose');
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phon: {
        type: String,
        required: true
    }, role: {
        type: String,
        default: "normal user"
    }, 
    
}, { timestamps: true })
module.exports = mongoose.model('User', UserSchema)