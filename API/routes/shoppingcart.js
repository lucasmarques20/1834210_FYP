const ShoppingCart = require("../models/ShoppingCart");
const router = require("express").Router();

// Create Shopping Cart

router.post("/", async (req, res) => {
    const newShoppingCart= new ShoppingCart(req.body);

    try{ 
        const existingShoppingCart = await newShoppingCart.save();
        res.status(200).json(existingShoppingCart); // Success
    } 
    catch (err) {
        res.status(err).json(err); // Error
    }
})

// Updating Shopping Cart

router.put("/:id", async(req, res)  => {
    try{
        const updatedShoppingCart = await ShoppingCart.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(updatedShoppingCart)
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// Delete Shopping Cart

router.delete("/:id", async(req, res)  => {
    try{
        await ShoppingCart.findByIdAndDelete(req.params.id)
        res.status(200).json("Shopping Cart Deleted")
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// Show Shopping Cart

router.get("/find/:userId", async (req, res) => {
    try{
        const shoppingCart = await ShoppingCart.findOne({userId: req.params.id});
        res.status(200).json(shoppingCart);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

// Get All Shopping Carts 

router.get("/", async (req, res) => {
    try {
        const allShoppingCarts = await ShoppingCart.find();
        res.status(200).json(allShoppingCarts)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;