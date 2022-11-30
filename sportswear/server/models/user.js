import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user:{
        type: String,        
        required: true,
        trim: true
    },
    password:{
        type: Password,
        required: true,
        trim: true
    },
    role:{
        type: String,
        required: true,
        trim: true
    }
    
})

export default mongoose.model('User', userSchema);