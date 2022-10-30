// import {SET_COUNT} from '../Actions/Types'




// const SetCount   = (state ,  action) =>{

//     if(typeof state === 'undefined')
//     {
//         return {
//             count : 0
//         }
//     }
    

//     switch(action.type)
//     {
//         case SET_COUNT :
//             return {
//                 ...state,
//                 count : action.data
//             }
//         default : return state
//     }


// }

// export default SetCount
import {SET_COUNT} from '../Actions/Types'




const SetCount   = (state ,  action) =>{

    if(typeof state === 'undefined')
    {
        return {
            count : 0
        }
    }
    

    switch(action.type)
    {
        case SET_COUNT :
            return {
                ...state,
                count : action.data
            }
        default : return state
    }


}

export default SetCount