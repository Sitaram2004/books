// import React from "react";
// import {Routes , Route } from 'react-router-dom'

// import Home from "../View/Home";
// import About from "../View/About";
// import Cart from "../View/Cart";

// import Contact from '../View/Contact'
// import Users from '../View/Users'

// import Navbar from "../Navbar/Navbar";
// import RemoteData from "../View/RemoteData";
// import Login from "../View/Login";
// import MyRedux from "../View/ReduxPage";

// import DataWithReact from "../View/DataWithRedux";



// function Routing(){

//  const [color  , setColor] =  React.useState('black')   
    

// return (
//     <>
//     <Navbar/>
// <input  placeholder="Enter any color" onChange={(e)=>{setColor(e.target.value)}} value={color} />
//     <Routes>
//         <Route path="/"  element={<Home  color={color}  />}  />
//         <Route path="/home"  element={<Home  color={color}/>}  />
//         <Route path="/about"  element={<About color={color}   />}  />
//         <Route path="/cart"  element={<Cart/>}  />
//         <Route path="/users"  element={<Users/>}  />
//         <Route path="/contact"  element={<Contact color={color} />}  />
//         <Route path="/rdata"  element={<RemoteData/>}  />
//         <Route path="/redux"  element={<MyRedux/>}  />
//         <Route path="/dwr"  element={<DataWithReact/>}  />
//         <Route path="*"   element={<Home  color={color}/>}  />
//     </Routes>
    
//     </>
// )


// }

// export default Routing;



import React from "react";
import {Routes , Route } from 'react-router-dom'

import Home from "../Views/Home";
import About from "../Views/About";
import Cart from "../Views/Cart";

import Contact from '../Views/Contact'
import Users from '../Views/Users'

import Navbar from "../Navbar/Navbar";
import RemoteData from "../Views/RemoteData";
// import Login from "../Views/Login";
import MyRedux from "../Views/ReduxPage";

import DataWithReact from "../Views/DataWithRedux";





function Routing(){

 const [color  , setColor] =  React.useState('black')   
    

return (
    <>
    <Navbar/>
<input  placeholder="Enter any color" onChange={(e)=>{setColor(e.target.value)}} value={color} />
    <Routes>
        <Route path="/"  element={<Home  color={color}  />}  />
        <Route path="/home"  element={<Home  color={color}/>}  />
        <Route path="/about"  element={<About color={color}   />}  />
        <Route path="/cart"  element={<Cart/>}  />
        <Route path="/users"  element={<Users/>}  />
        <Route path="/contact"  element={<Contact color={color} />}  />
        <Route path="/rdata"  element={<RemoteData/>}  />
        <Route path="/redux"  element={<MyRedux/>}  />
        <Route path="/dwr"  element={<DataWithReact/>}  />
        <Route path="*"   element={<Home  color={color}/>}  />
    </Routes>
    
    </>
)


}

export default Routing;