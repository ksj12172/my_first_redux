import {ADD_TODO, TOGGLE_TODO} from './actionTypes';

const initialState = {
	todos : [
		{id:'0', contents:'밥먹기', done:true},
		{id:'1', contents:'리액트 공부하기', done:true},
		{id:'2', contents:'밥먹기', done:true},
	]
}

export default (state=initialState, {type, payload}) => {
	switch (type) {
		case ADD_TODO:
			return {
				todos : [
					...state.todos,
					{
						id:String(state.todos.length),
						contents:payload,
						done:false
					}
				]
			};
		case TOGGLE_TODO:
			return {
				todos : state.todos.slice(0).map((v) => (v.id === payload ? { ...v, done:!v.done } : {...v}))
			}
		case RESET_TODO:
			return {todos:state.todos.map((V) => ({...v, done:false}))};
		default:
			return state;
	}
}