const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[false,'name is required']
    },
    email:{
        type:String,
        required:[true, 'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    cpassword:{
        type:String,
        required:[false, 'cpassword is required']
    },
});

const userModel = mongoose.model('users', userSchema)
module.exports = userModel