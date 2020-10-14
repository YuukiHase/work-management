import * as types from './../constants/ActionTypes';
import { findIndex } from 'lodash';

let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

let generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4()
        + '-' + s4() + s4() + s4();
}

let data = JSON.parse(localStorage.getItem('tasks'));
let intialState = data ? data : [];

let myReducer = (state = intialState, action) => {
    let index = -1;

    switch (action.type) {
        case types.LIST_ALL:
            return state;

        case types.SAVE_TASK:
            let task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            };
            if (!task.id) {
                // Add Task
                task.id = generateID();
                state.push(task);
            } else {
                // Edit Task
                index = findIndex(state, (t) => {
                    return t.id === task.id
                });
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.UPDATE_STATUS:
            index = findIndex(state, (task) => {
                return task.id === action.id;
            });
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];

        case types.DELETE_TASK:
            index = findIndex(state, (task) => {
                return task.id === action.id;
            });
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];

        default: return state;
    }
};

export default myReducer;