const UsersInfo = require("../models/UsersInfo");
const router = require("express").Router();

// Updating User
router.put("/:id", async (req, res) =>{
    try {
        const userUpdated = await UsersInfo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}) 
    
        res.status(200).json(userUpdated)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// Deleting User
router.delete("/:id", async(req, res)  => {
    try{
        await UsersInfo.findByIdAndDelete(req.params.id)
        res.status(200).json("User Deleted")
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// Showing User
router.get("/find/:id", async(req, res)  => {
    try{
        const user = await UsersInfo.findById(req.params.id)
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
}) 

// Showing All Users
router.get("/", async (req, res) => {
    try {
        const allUsers = await UsersInfo.find();
        res.status(200).json(allUsers)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;