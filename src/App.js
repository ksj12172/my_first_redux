import React from 'react';
import { addTodo } from './data/todos/actions';

class App extends React.Component {
	render() {
		return (
			<>
			<Title titleText="나의 하루" time="8월 1일"/>
			<div className="todo-container">
				{this.props.todos.map((todo) => {
					<Todo key={todo.id} {...todo} onToggle={this.handleToggleTodo} />
				})}				
			</div>
			<AddTodo />
			</>
		)
	}
}

export default connect(mapStateToProps)(App);