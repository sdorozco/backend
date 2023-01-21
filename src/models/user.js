const { Schema } = require('mongoose')
const mongoose = require('mongoose')

var userSchema = new Schema(
    {
        name:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        },
        date_created:{
            type: String,
            require: true
        }
    }
)

module.exports = mongoose.model('users', userSchema)