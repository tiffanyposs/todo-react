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
          todos={ this.state.todos }/>
      </div>
    );
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
