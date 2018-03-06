import React, { Component } from 'react';

class TodoListItem extends Component {
  /**
  Renders component
  * @name render
  */
  render() {
    return (
      <li>{this.props.todo}</li>
    )
  }
}

export default TodoListItem;
