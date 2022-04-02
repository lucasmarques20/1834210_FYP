const mongoose = require ("mongoose")

const ShoppingCartSchema = new mongoose.Schema(
    {
        user:{type:String, required:true, unique:true},

        products:[
            {
            productID: {type: String},
            quantity: {type: Number, default: 1},

        }]
        
    }, {timestamps: true} // gives time of creation 

)

module.exports = mongoose.model("Shopping Cart", ShoppingCartSchema);