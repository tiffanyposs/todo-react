import React, { Component } from 'react';

import TodoListItem from './todo_list_item';


class TodoList extends Component {
  /**
  Renders component
  * @name render
  */
  render() {
    const todos = this.createTodos();
    return (
      <div className="todo-list">
        <ul>
          {todos}
        </ul>
      </div>
    )
  }

  /**
  Creates an array of JSX TodoListItem
  * @name createTodos
  * @param event
  */
  createTodos() {
    return this.props.todos.map((todo, index) => {
      return (
        <TodoListItem
          key={index}
          todo={todo} />
      );
    });
  }
}

export default TodoList;
