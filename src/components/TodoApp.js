import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'clean', completed: false },
    { id: 2, task: 'wash', completed: true },
    { id: 3, task: 'grow', completed: false }
  ]

  const [todos, setTodos] = useState(initialTodos)
  const addTodo = newTodoText => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }])
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default TodoApp
