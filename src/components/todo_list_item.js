import React, { Component } from 'react';

class TodoListItem extends Component {
  /**
  Renders component
  * @name render
  */
  render() {
    return (
      <li>
        <span>{this.props.todo}</span>
        <span onClick={ () => this.props.removeTodo(this.props.todo)}>Delete</span>
      </li>
    )
  }
}

export default TodoListItem;
