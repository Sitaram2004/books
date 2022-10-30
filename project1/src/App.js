// import React ,  {useEffect, useState} from 'react'

// import Routing from './Routing/Routes';
// import Authroutes from './Routing/Authroutes';

// import store from './Store/Store'

// import {Provider} from 'react-redux'





// function MainFile(){


//   store.subscribe(()=>{
//     localStorage.setItem('reduxStore' , JSON.stringify(store.getState()) );
//   })



// const [Auth , setAuth] =  useState(false)


// useEffect(()=>{
  
//   console.log(localStorage.getItem('auth'))
// })


//   return(

//     <>
//    <Provider store={store}>

//   {localStorage.getItem('auth') === 'Success' 
//   ?
//   <Routing/>
  
//   :
//   <Authroutes/>
//   } 
//    </Provider>
//     </>
//   )  

// }


// export default MainFile ;





import React ,  {useEffect, useState} from 'react'

// import Routing from './Routing/Routes';
// import AuthRoutes from './Routing/AuthRoutes';

import FinalRouting from './Routing/FinalRouting';

import store from './Store/Store'
import {Provider} from 'react-redux'

function MainFile(){
  store.subscribe(()=>{
    localStorage.setItem('reduxStore' , JSON.stringify(store.getState()) );
  })
const [Auth , setAuth] =  useState(false)

  return(
    <>
   <Provider store={store}>
    <FinalRouting/>
  
   </Provider>
    </>
  )  

}


export default MainFile ;


