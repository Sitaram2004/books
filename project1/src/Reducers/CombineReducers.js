// import {combineReducers} from 'redux'
// import MyCount from './Count'
// import RData from './ApiCall'

// export default combineReducers({
//     MyCount,
//     RData
// });


import {combineReducers} from 'redux'
import MyCount from './Count'
import RData from './ApiCall'
import Auth from './AuthReducer';

export default combineReducers({
    MyCount,
    RData,
    Auth
});
