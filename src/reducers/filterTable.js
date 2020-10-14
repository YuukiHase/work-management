import * as types from '../constants/ActionTypes';

let intialState = {
    name: '',
    status: -1
};

let myReducer = (state = intialState, action) => {
    switch(action.type) {
        case types.FILTER_TABLE:
            state = action.filter;
            return state;
        
        default: return state;
    }
};

export default myReducer;