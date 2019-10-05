import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          {...todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
