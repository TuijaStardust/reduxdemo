// REDUCER IS SPLIT TO 2 FILES -> counter.js & results.js

// import * as actionTypes from '../actions';


// const initialState = {
//     counter: 42,
//     results: []
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.INCREMENT:
//             return {
//                 ...state,
//                 counter: state.counter +1
//             }             
//         case actionTypes.DROP:
//             return {
//                 ...state,
//                 counter: state.counter -1
//             }       
//         case actionTypes.ADD :            
//             return {
//                 ...state,
//                 counter: state.counter + action.value
//             }                    
//         case actionTypes.REMOVE:       
//             return {
//                 ...state,
//                 counter: state.counter - action.value
//             }            
//         case actionTypes.STORE_RESULT:
//             return {
//                 ...state,
//                 results: state.results.concat({id: new Date(), value: state.counter})
//             }
//         case actionTypes.DELETE_RESULT:
//             return {
//                 ...state,
//                 results: state.results.filter(result => result.id !== action.resultElementId)
//             }        
//     }

//     return state;
// }    
  
// export default reducer;