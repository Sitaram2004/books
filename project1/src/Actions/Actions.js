// import {setCount} from './ActionCreators'
// import {apiLoading ,apiSuccess ,apiFailure } from './ActionCreators'
// import axios from 'axios'




// export const setCountDemo =  (data) =>{
//     return (dispatch) =>{
//         dispatch(setCount(data))
//     }
// }



// export const apiCall =  () =>{
//     return (dispatch) =>{
//         dispatch(apiLoading());
//         axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{

//         dispatch(apiSuccess(res.data))
//         }).catch((err)=>{
//             dispatch(apiFailure(err.res.data))
//         })
        
//     }
// }
import {setCount} from './ActionCreators'
import {apiLoading ,apiSuccess ,apiFailure } from './ActionCreators'
import axios from 'axios'




export const setCountDemo =  (data) =>{
    return (dispatch) =>{
        dispatch(setCount(data))
    }
}



export const apiCall =  () =>{
    return (dispatch) =>{
        dispatch(apiLoading());
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{

        dispatch(apiSuccess(res.data))
        }).catch((err)=>{
            dispatch(apiFailure(err.res.data))
        })
        
    }
}