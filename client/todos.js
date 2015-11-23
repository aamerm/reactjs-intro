import React from 'react';
import Header from './header';
import TodoList from './todo_list';
import {connect} from 'react-redux';

class Todos extends React.Component {

deleteTodo(todo){
	this.props.dispatch({type: 'DELETE_TODO', todo: todo});
}

render(){
	return <div> 
	<Header />
	<TodoList 
		onDeleteTodo={this.deleteTodo.bind(this)}
		todos={this.props.todos}	/>
	</div>;
}

}

export default connect(x=> x) (Todos);