import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoInput from './components/todo_input';
import TodoList from './components/todo_list';


class App extends Component {
  /**
  * @name constroctor
  * @param props
  */
  constructor(props) {
    super(props);
    this.state = { todos: [] }
  }

  /**
  Renders component
  * @name render
  */
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoInput
          onTodoSubmit={ (todo) => { this.updateTodos(todo); }}/>
        <TodoList
          todos={ this.state.todos }
          removeTodo={ selectedTodo => this.removeTodo(selectedTodo) }/>
      </div>
    );
  }

  /**
  Removes a todo
  * @name removeTodo
  * @param selectedTodo
  */
  removeTodo(selectedTodo) {
    let todos = this.state.todos;
    let index = todos.indexOf(selectedTodo);
    if(index > -1) {
      todos.splice(index, 1);
      this.setState({ todos });
    }
  }

  /**
  Updates todos state
  * @name updateTodos
  * @param todo
  */
  updateTodos(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
