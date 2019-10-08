import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions'

class Counter extends Component {
    // REDUXIN TAKIA NÄMÄ VOI JÄTTÄÄ POIS
    // state = {
    //     counter: 10
    // }

    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case 'addOne':
    //             this.setState( ( prevState) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dropOne':
    //             this.setState( ( prevState) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'addValue':
    //             this.setState( ( prevState) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'dropValue':
    //             this.setState( ( prevState) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render() {
        return (
            <div>
                <h2>Your score is: {this.props.ctr}</h2>
                <div>
                    <button onClick={this.props.onIncCounter}>Add one </button>
                    <button onClick={this.props.onDropCounter}>Remove one</button>
                    <button onClick={this.props.addCounter}>Add five</button>
                    <button onClick={this.props.removeCounter}>Remove five</button>
               
                    <button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store result</button> 

                    <ul>
                        {this.props.storedResult.map(item => (
                            <li key={item.id} onClick={() => this.props.onDeleteCounter(item.id)}>{item.value}</li>
                        ))}   
                    </ul>
                
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDropCounter: () => dispatch({type: actionTypes.DROP}),
        addCounter: () => dispatch({type: actionTypes.ADD, value:5}),
        removeCounter: () => dispatch({type: actionTypes.REMOVE, value:5}), 
        onStoreCounter: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}), 
        onDeleteCounter: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElementId: id}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);