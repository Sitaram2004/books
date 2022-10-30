import React from 'react'
import {apiCall} from '../Actions/Actions'

import { useDispatch  ,useSelector } from 'react-redux'


function DataWithReact()
{

const dispatch =  useDispatch()


const apiData  =  useSelector((state) => state.RData.data)

const loading  =  useSelector((state) => state.RData.loading)

console.log(apiData)


React.useEffect(()=>{
  dispatch(apiCall())  

},[])




return(
    <>
    <h1>This Data is from Redux</h1>
    {loading === true ? 
    <h1> Data is Loading</h1>
    :
    apiData.map((row,index)=>(
        <h1>Sr. {index+ 1} _________ title :  {row.title} </h1>
    ))
    }


   
    </>


)

}

export default DataWithReact;