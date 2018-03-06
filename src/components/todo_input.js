import React, { Component } from 'react';

class TodoInput extends Component {
  /**
  * @name constroctor
  * @param props
  */
  constructor(props) {
    super(props);
    this.state = { todo: '' }
  }

  /**
  Renders component
  * @name render
  */
  render() {
    return(
      <div className="todo-input">
        <input
          value={this.state.todo}
          placeholder="Add a Todo"
          onChange={ event => this._handleChange(event) }
          onKeyPress={ event => this._handleKeyPress(event)} />
        <p>Submitted Todo: {this.state.todo}</p>
      </div>
    )
  }

  /**
  Handle when input changes
  * @name _handleChange
  * @param event
  * @private
  */
  _handleChange(event){
    this.setState({ todo: event.target.value })
  }

  /**
  Handle when input is submitted
  * @name _handleKeyPress
  * @param event
  * @private
  */
  _handleKeyPress(event) {
    if (event.charCode === 13 && this.state.todo) {
      let todo = event.target.value;
      this.props.onTodoSubmit(todo);
      this.setState({ todo: '' });
    }
  }
}

export default TodoInput;
