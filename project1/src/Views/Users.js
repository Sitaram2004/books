import React from 'react'



function About(){

const [data  ,setData] =React.useState([])
const [value , setvalue] =React.useState("")

const onInput=(e)=>{
 setvalue(e.target.value)
}

const onAdd=()=>{
  setData ([...data,value])
}
    return (
        <> <h1>This is Users Comp.</h1>
        <div style={{display:"flex",justifyContent:"center"}} >
     <input placeholder='enter any name' value={value} onChange={onInput}/>
       <button onClick={onAdd} >Add</button>
        </div>
        <div style = {{dispaly:"flex" ,marginTop:100,flexDirection:"column",justifyContent:"center"}}>
         { data.map((data,i)=>(
         <h1 style={{textAlign:"center"}}>{i+1}.{data}</h1>

          )
         )
         }
        </div>
        </>
      
  
  
  
  
  
        )
}


export default About;