// import React from "react";
// import {Routes , Route } from 'react-router-dom'

// import Login from "../View/Login";





// function Routing(){


    

// return (
//     <>
   
//     <Routes>
//         <Route path="/"  element={<Login  />}  />
//         <Route path="/login"  element={<Login  />}  />
//         <Route path="*"   element={<Login />}  />
//     </Routes>
    
//     </>
// )


// }

// export default Routing;

import React from "react";
import {Routes , Route } from 'react-router-dom'

import Login from "../Views/Login";
import Register from "../Views/Register";





function Routing(){


    

return (
    <>
   
    <Routes>
        <Route path="/"  element={<Login  />}  />
        <Route path="/login"  element={<Login  />}  />
        <Route path="/register"  element={<Register  />}  />
        <Route path="*"   element={<Login />}  />
    </Routes>
    
    </>
)


}

export default Routing;