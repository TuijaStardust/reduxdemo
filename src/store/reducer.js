const initialState = {
    counter: 42,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter +1
            }             
        case 'DROP':
            return {
                ...state,
                counter: state.counter -1
            }       
        case 'ADD':            
            return {
                ...state,
                counter: state.counter + action.value
            }                    
        case 'REMOVE':       
            return {
                ...state,
                counter: state.counter - action.value
            }            
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            return {
                ...state,
                results: state.results
            }        
    }

    return state;
}    
  
export default reducer;