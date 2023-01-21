import mongoose, { Schema } from 'mongoose'

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

export default mongoose.model('users', userSchema)