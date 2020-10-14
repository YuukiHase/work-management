import * as types from '../constants/ActionTypes';

let intialState = {
    id: '',
    name: '',
    status: false
};

let myReducer = (state = intialState, action) => {
    switch(action.type) {
        case types.EDIT_TASK:
            state = action.task;
            return state;
        
        default: return state;
    }
};

export default myReducer;