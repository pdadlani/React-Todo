import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
  return (
    <div className='todo-list'>
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  )
}

export default TodoList;