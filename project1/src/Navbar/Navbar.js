import React , {useState} from "react";
import {useNavigate } from 'react-router-dom'

import { useDispatch } from "react-redux";

import {cleanAuth} from '../Actions/ActionCreators'




function Navbar (){


  const navigate  =  useNavigate()
  const dispatch =  useDispatch()


    const [mode , setMode ]  =  useState('light')

  

    const changeMode  =  () =>{

        if(mode  === 'light')
        {
            setMode('dark')
        }
        else
        {
            setMode('light')
        }
    }

const handleLogout = (e) =>{
  e.preventDefault()

  dispatch(cleanAuth())
  // localStorage.removeItem('auth')
  // window.location.reload()

}



    return (
        <nav class={`navbar navbar-expand-lg bg-${mode}`}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color : mode === 'light'  ? 'black' : "white"}}>Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active"  style={{color : mode === 'light' && window.location.href.includes('home')  ? 'red' : "black" , cursor : "pointer"}} aria-current="page"  onClick={()=> navigate('/home')}  >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{color : mode === 'light'  && window.location.href.includes('about')  ? 'red' : "black" ,  cursor : "pointer"}} aria-current="page"  onClick={()=> navigate('/about')}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{color : mode === 'light'  && window.location.href.includes('contact')  ? 'red' : "black" ,  cursor : "pointer"}} aria-current="page" onClick={()=>navigate('/contact')}>Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{color : mode === 'light'  && window.location.href.includes('users')  ? 'red' : "black" ,  cursor : "pointer"}} aria-current="page" onClick={()=>navigate('/users')} >Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{color : mode === 'light'  && window.location.href.includes('cart')  ? 'red' : "black" ,  cursor : "pointer"}} aria-current="page" onClick={()=>navigate('/cart')} >Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{color : mode === 'light'  && window.location.href.includes('cart')  ? 'red' : "black" ,  cursor : "pointer"}} aria-current="page" onClick={()=>navigate('/rdata')} >Remote Data</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" style={{color : mode === 'light'  && window.location.href.includes('redux')  ? 'red' : "black" ,  cursor : "pointer"}} aria-current="page" onClick={()=>navigate('/redux')} >My Redux</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{color : mode === 'light'  && window.location.href.includes('dwr')  ? 'red' : "black" ,  cursor : "pointer"}} aria-current="page" onClick={()=>navigate('/dwr')} >Data_with_Redux</a>
        </li>
        
        
        <li class="nav-item">
        <button class="btn btn-outline-success" onClick={changeMode}>{mode === 'light' ? 'Dark' : 'Light'}</button>

        </li>
      </ul>
      <form class="d-flex" role="search">
        <input  class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success"  onClick={(e)=>handleLogout(e)}>Logout</button>
      </form>
    </div>
  </div>
</nav>
    )

}

export default Navbar;