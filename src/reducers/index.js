import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filter from './filterTable';
import search from './search';
import sort from './sort';

const myReducers = combineReducers({
    tasks, // tasks: tasks
    isDisplayForm, // isDisplayForm: isDisplayForm
    itemEditing, // itemEditing: itemEditing
    filter, // filter: filter
    search, // keyword: keyword
    sort // sort: sort
});

export default myReducers;