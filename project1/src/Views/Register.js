import React , {useState} from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'

import { RegisterAction} from '../Actions/AuthActions'
import {cleanAuth} from '../Actions/ActionCreators'








const Register  = () =>{
    const navigate  =  useNavigate()
    const dispatch =  useDispatch()

    const [data , setData] =  useState({

        email : "",
        name : "",
        password : ""
    
    })


    const msg  = useSelector((state) => state.Auth.r_data.msg)
    const err = useSelector((state) => state.Auth.r_error.err)
    
    
    const handleInput = (e) =>{
       setData({...data , [e.target.name] : e.target.value})
    
    }


    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
        dispatch(RegisterAction(data))
        setData({...data, ['name'] : "" , ['email']  :"" , ['password']  :""})

    
    
    }


 React.useEffect(()=>{

    if(msg !== null && msg  !== ""  && typeof(msg) === 'string')
    {
        alert(msg)
        dispatch(cleanAuth())

    }

    if(err !== null && err  !== "" && typeof(err) === 'string' )
    {
        alert(err)
        dispatch(cleanAuth())
    }

 },[msg , err])   

return(
    <div  style={{display:"flex" , justifyContent:"center"    ,alignSelf:"center"  ,marginTop:'10%'  , borderRadius:10 }} >

    <form>
      <div class="form-group">
        <label for="exampleInputName">Name</label>
        <input type="text" name="name"  onChange={handleInput} value={data.name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
      </div>
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
      <h6>Already have an account   <span style={{color:"blue" , cursor:"pointer"  , marginLeft:20}} onClick={()=>{navigate('/login')}} ><u> Login Here !! </u> </span> </h6>
      <button  onClick={(e)=>handleSubmit(e)} class="btn btn-primary">Submit</button>
    </form>
    
            </div>
)



}


export default Register;