import React,{useEffect, useState} from "react"

function RemoteData(){

const[Data, setData]=useState([])

const[fData , setfData]=useState([])


const fetchRemoteData =()=>{
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(Data => setData(Data))
}

const fetchRemoteData2 =()=>{
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response=>response.json())
  .then(Data => setData(Data))
  }



useEffect(()=>{
fetchRemoteData()
//fetchRemoteData2()
} ,[])
const handlesearch=(e)=>{
  console.log(e)
 let temp=Data;
  var ft = temp.filter((el)=>{
return String(el.id).includes(e.target.value)||el.title.includes(e.target.value)|| String(el.completed).includes(e.target.value)
  })
  setfData(ft)
}

return(
<>
<div style={{display:"flex" ,justifycontent:"center" ,padding:40}}> 


<input  class="form-control me-2"  onChange={handlesearch} type="search" placeholder="Search" aria-label="Search"/>
     
</div>

{Array.isArray(fData) && fData.length > 0 ?
  <table class="table">
  <thead>
    <tr>
      <th scope="col">sr.no</th>
      <th scope="col">user ID</th>
      <th scope="col">images</th>
      <th scope="col">title</th>
      <th scope="col">status</th>
   
    </tr>
  </thead>
  <tbody>
{ fData.map((row,index)=>(
  <>  
 <tr>
      <th scope="row">{index+1}</th>
      <td>{row.id}</td>
      <td><img src ={ row.thumbnailUrl} ></img></td>
      <td>{row.title}</td>
      <td>{row.completed===true? "completed": "not completed"} </td>
    </tr>
    
</>
)
)

} 

    
      
  </tbody>
</table>
:
<>
{Array.isArray(Data) && Data.length > 0 ?
<>
<table class="table">
  <thead>
    <tr>
      <th scope="col">sr.no</th>
      <th scope="col">user ID</th>
      <th scope="col">images</th>
      <th scope="col">title</th>
      <th scope="col">status</th>
   
    </tr>
  </thead>
  <tbody>
{ Data.map((row,index)=>(
  <>  
 <tr>
      <th scope="row">{index+1}</th>
      <td>{row.id}</td>
      <td><img src ={ row.thumbnailUrl} ></img></td>
      <td>{row.title}</td>
      <td>{row.completed===true? "completed": "not completed"} </td>
    </tr>
    
</>
)
)

} 

    
      
  </tbody>
</table></>
:  <h1>data is loading</h1>} 
</>

}
</>
)
}


export default RemoteData














