const mongoose = require ("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        id:{type:Number, required:false, unique: false},
        title:{type: String, required: true, unique: true},
        description:{type: String, required: true},
        img: {type: String, required: true},
        price: {type: Number, required: true},
        categories: {type: Array, required: true},
        size: {type: String},
        
    }, {timestamps: true} // gives time of creation 

)

module.exports = mongoose.model("Product", ProductSchema);