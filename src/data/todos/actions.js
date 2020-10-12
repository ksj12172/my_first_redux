import {ADD_TODO, TOGGLE_TODO, RESET_TODO} from './actionTypes';
import {createAction, createActions} from 'redux-actions';

export const addTodo = (contents) => ({
	type: ADD_TODO,
	payload:contents,
})

export const toggleTodo = (id) => ({
	type:TOGGLE_TODO,
	payload:id
})

export const resetTodo = createAction(RESET_TODO);

const {addTodo, toggleTodo } = createActions(ADD_TODO, TOGGLE_TODO);
console.log(addTodo, )