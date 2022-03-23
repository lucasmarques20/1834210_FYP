const router = require("express").Router();
const UsersInfo = require("../models/UsersInfo");

// Sign Up

router.post("/signup", async (req, res) => {
    const newUser = new UsersInfo({
        email: req.body.email,
        password: req.body.password
    })

try{
    const newSavedUser = await newUser.save();
    res.status(201).json(newSavedUser); // 201 for success
}
catch (err) {
    res.status(500).json(err); // 500 for error
}})

//Login

router.post("/login", async (req, res) => {
    try{
        const existingUser = await UsersInfo.findOne({email: req.body.email, password: req.body.password})
        !existingUser && res.status(401).json("Not found")  
    
        res.status(200).json(existingUser);
    }
    catch (err) {
        res.status(500).json(err); // 500 for error
    }
})

module.exports = router;