import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          id={todo.id}
          task={todo.task}
          key={todo.id}
          completed={todo.completed}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
