import React , {useEffect} from 'react'



function About({color}){

const [count ,setcount]=React.useState(0)

useEffect(()=>{

    console.log("these is useeffect");

    if(count===10)
    {
        alert("you use all values")
    }
})


    return (
        <>
        <h1>color is :{color}</h1>
        <h1>This is About Comp.</h1>
        <h1>value of count is:{count}</h1>
        <button onClick={()=> setcount(count+1)}>update</button>
      <h1>value of count is:{count}</h1>
        </>
    )
}


export default About;