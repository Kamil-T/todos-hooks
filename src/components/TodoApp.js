import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import useTodoState from '../hooks/useTodoState'

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || []

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  )

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
