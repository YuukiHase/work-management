import * as types from '../constants/ActionTypes';

let intialState = {
    keyword: ''
};

let myReducer = (state = intialState, action) => {
    switch(action.type) {
        case types.SEARCH:
            return Object.assign({}, state, {
                keyword: action.keyword
            });
        
        default: return state;
    }
};

export default myReducer;