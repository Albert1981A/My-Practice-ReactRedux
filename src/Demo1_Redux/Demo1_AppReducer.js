/**
 * action - a JSON with two keys:
 * 1. type - MANDATORY - the type of action
 * 2. payload - OPTIONAL - the Data that was sent with the action
 */

const appReducer = (state = { counter: 0 }, action) => {
    // debugger;
    switch (action.type) {

        case "INCREMENT":
            return {...state, counter: state.counter + action.payload};

        case "DECREMENT": 
            return {...state, counter: state.counter - action.payload};

        default:
            return state;

    }
    
};
export default appReducer;