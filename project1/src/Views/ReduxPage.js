import React from 'react';
import {setCountDemo} from '../Actions/Actions'
import {useDispatch ,  useSelector} from 'react-redux'



function MyRedux(){
const dispatch = useDispatch()    

// const  [count  , setCount] =  React.useState(0)

const count = useSelector((state) => state.MyCount.count)


const handleButton =()=>{
dispatch(setCountDemo(count + 1))
}

return(
    <>
    <h1>This is Redux Page</h1>
    <button onClick={handleButton}>Incre</button>
    <h1>Value of Count is : {count}</h1>
    </>
)


}

export default MyRedux