//alert('Welcome to React.js Workshop. Your setup is done!');

import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todos';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState={
	todos: [
			{id:1, text: "Learn React.js"},
			{id:2, text: "Build an application in React.js"},
			{id:3, text: "Become Rich"}
		]
};

const todoApp=(state=initialState, action) => {
	switch(action.TYPE){
		case 'DELETE_TODO':
			const newTodos=state.todos.filter(t=> t !== action.todo);
			return {todos: newTodos};
	}
	return state;
};

const store =createStore(todoApp);

ReactDOM.render(
	<Provider store={store}>
		<Todos />
	</Provider>, 
	document.getElementById('main')
);
