import React from 'react';

class TodoList extends React.Component {
render(){
return <ul>
{
	this.props.todos.map(todo => {
		return <li>
			{todo.text}
			<button onClick={()=>this.props.onDeleteTodo(todo)}>x</button>
		</li>;
	})
}
</ul>;
}
}

export default TodoList;
