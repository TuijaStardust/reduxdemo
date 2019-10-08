const initialState = {
    counter: 42
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
        
    }

    return state;
}    
  
export default reducer;