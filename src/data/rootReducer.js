import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import todoReducer from './todos/reducer';

// 필드를 어떻게 나누는지가 중요하다
// rootReducer에서 어려 reducer를 합쳐준다
const createRootReducer = (history) => 
  combineReducers({
    router:connectRouter(history),
    todos:todosReducer,
  });

  export {createRootReducer};