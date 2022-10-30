import React from "react";

import {useSelector} from 'react-redux'







function Home({color}){
console.log(color)

const count = useSelector((state)=> state.MyCount.count)



    return (
        <>
        <h1>This is Home Comp.</h1>
        <h1>This is {color}</h1>
        <h1>Value of count is {count}</h1>
        <div style={{width:"100px" , height:"100px" , backgroundColor:color}}></div>
        </>
    )
}







export  default Home