// import React, { useState } from 'react'






// function Login(){


//     const [data , setData] =  useState({

//         email : "",
//         pass : ""

//     })


//     const handleInput = (e) =>{
//        setData({...data , [e.target.name] : e.target.value})

//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault()

//         localStorage.setItem('auth' , "Success")
//         window.location.reload()

//     }



//     return(
//         <div  style={{display:"flex" , justifyContent:"center"    ,alignSelf:"center"  ,marginTop:'10%'  , borderRadius:10 }} >

// <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" name="email"  onChange={handleInput} value={data.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password"   name="pass" onChange={handleInput} value={data.pass} class="form-control" id="exampleInputPassword1" placeholder="Password" />
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button  onClick={(e)=>handleSubmit(e)} class="btn btn-primary">Submit</button>
// </form>

//         </div>
//     )



// }

// export default Login



import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import {useDispatch ,  useSelector} from 'react-redux'
import {loginAction} from '../Actions/AuthActions'
import {cleanAuth} from '../Actions/ActionCreators'






function Login(){

  const navigate   =  useNavigate()
  const dispatch =  useDispatch()


    const [data , setData] =  useState({

        email : "",
        password : ""

    })


    const err_msg  =  useSelector((state) => state.Auth.l_error.msg)

    const handleInput = (e) =>{
       setData({...data , [e.target.name] : e.target.value})

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(loginAction(data))

        // localStorage.setItem('auth' , "Success")
        // window.location.reload()

    }

    React.useEffect(()=>{

      if(err_msg && err_msg !== null && err_msg !== "" && typeof(err_msg) === 'string')
      {
        alert(err_msg)
        dispatch(cleanAuth())
      }

    },[err_msg])



    return(
        <div  style={{display:"flex" , justifyContent:"center"    ,alignSelf:"center"  ,marginTop:'10%'  , borderRadius:10 }} >

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email"  onChange={handleInput} value={data.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"   name="password" onChange={handleInput} value={data.password} class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  {/* <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <br></br>
  <h6>Don't have an account   <span style={{color:"blue" , cursor:"pointer"  , marginLeft:20}} onClick={()=>{navigate('/register')}} ><u> Register Here !! </u> </span> </h6>
  <button  onClick={(e)=>handleSubmit(e)} class="btn btn-primary">Submit</button>
</form>

        </div>
    )



}

export default Login