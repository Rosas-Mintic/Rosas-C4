import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    amount:{
        type: Number,
        required: true,
        trim: true
    },
    image:{
        url: String,        
        public_id: String

    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    total:{
        type: Number,
        required: true,
        trim: true
    }
    
})

export default mongoose.model('Cart', cartSchema);