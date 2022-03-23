const router = require("express").Router();
const Products = require("../models/Products");

// Adding New Products

router.post("/", async (req, res) => {
    const newProduct= new Products(req.body);


    try{ 
        const existingProduct = await newProduct.save();
        res.status(200).json(existingProduct); // Success
    } 
    catch (err) {
        res.status(err).json(err); // Error
    }
})

// Updating Product

router.put("/:id", async(req, res)  => {
    try{
        const updatedProduct = await Products.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(updatedProduct)
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// Deleting Product
router.delete("/:id", async(req, res)  => {
    try{
        await Products.findByIdAndDelete(req.params.id)
        res.status(200).json("Product Deleted")
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// Showing Product

router.get("/find/:id", async (req, res) => {
    try{
        const product = await Products.findById(req.params.id);
        res.status(200).json(product);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})


// Showing All Products

router.get("/", async (req, res) => {
    const newQuery = req.query.new;
    const categoriesQuery = req.query.categories;
    try {
        let products;
        
        // Fecthing Products
        if(newQuery) 
        {
            products = await Products.find().sort({createdAt: -1}).limit(1)
        }
        else if (categoriesQuery) 
        {
            products = await Products.find({categories:
            {
                $in: [categoriesQuery]
            },
        })
    }
    else {products = await Products.find()}

    res.status(200).json(products)
} catch (err) {
    res.status(500).json(err);
}
})


module.exports = router;