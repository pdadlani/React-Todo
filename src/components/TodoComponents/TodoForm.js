import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.state.todo = '';
  }

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input 
          type='text'
          value={this.state.todo}
          name='todo'
          onChange={this.handleChange}
        />
        <button className='submit-todo'>Submit</button>
        <button className='clear-completed-button' onClick={this.props.clearCompleted}>
          Clear Completed
        </button>
      </form>
    )
  }
}

export default TodoForm;