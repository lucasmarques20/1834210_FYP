const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const dotenv = require("dotenv");
const userRoute = require ("./routes/user")
const authenticationRoute = require ("./routes/authentication")
const productsRoute = require ("./routes/products")
const shoppingCartRoute = require ("./routes/shoppingcart")
const cors = require("cors")
dotenv.config();

mongoose.connect (process.env.URL)
.then(()=>console.log("Connection Successful")).catch((err)=>{console.log(err)});

app.use (cors({origin: "http://localhost:3000"})) // Client can now run on a different domain

app.use(express.json());
app.use("/api/authentication", authenticationRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productsRoute);
app.use("/api/shoppingcart", shoppingCartRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend is running");
});

