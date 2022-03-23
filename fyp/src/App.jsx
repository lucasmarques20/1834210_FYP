import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import ProductView from "./pages/ProductView";
import ShoppingCart from "./pages/ShoppingCart";
import SignUp from "./pages/SignUp";

import { BrowserRouter as Router, useNavigate, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}>
        </Route>
        <Route path = "/allproducts" element = {<List/>}> 
        </Route>
        <Route path = "/allproducts/:id" element = {<ProductView/>}> 
        </Route>
        <Route path = "/login" element = {<Login/>}>
        </Route>
        <Route path = "/signup" element = {<SignUp/>}> 
        </Route>
        <Route path = "/shoppingcart" element = {<ShoppingCart/>}> 
        </Route>
        </Routes>
    </Router>
  );
};

export default App;
