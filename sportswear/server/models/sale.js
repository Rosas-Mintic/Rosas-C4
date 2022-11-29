import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
    date:{
        type: Date,
        default: Date.now,
        required: true,
        trim: true
    },
    amount:{
        type: Number,
        required: true,
        trim: true
    },
    
})

export default mongoose.model('Sale', saleSchema);