import * as types from '../constants/ActionTypes';

let intialState = {
    sortBy: 'name',
    sortValue: 1
};

let myReducer = (state = intialState, action) => {
    switch(action.type) {
        case types.SORT:
            state.sortBy = action.sort.sortBy;
            state.sortValue = action.sort.sortValue;
            return { ...state }; // Copy and replace by new one.
        
        default: return state;
    }
};

export default myReducer;