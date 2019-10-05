import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import uuid from 'uuid/v4'

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || []

  const [todos, setTodos] = useState(initialTodos)

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = newTodoText => {
    setTodos([
      ...todos,
      { id: uuid(), key: uuid(), task: newTodoText, completed: false }
    ])
  }

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(updatedTodos)
  }

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    )
    setTodos(updatedTodos)
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  )
}

export default TodoApp
