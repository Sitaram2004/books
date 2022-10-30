import React , {useState} from "react";



function Cart() 
{

    const [color , setColor ] =  useState("black")

    const handleInput = (e) =>{

    console.log(e.target.value)

    setColor(e.target.value)

    }

    return (
        <>
        <h1>This is Cart Comp</h1>
        <input placeholder="Enter Color Name"  value={color}  onChange={handleInput}    />

        <h1 style={{color :  color}}>Value of color is :  {color}</h1>

        </>
    )


}

export default Cart