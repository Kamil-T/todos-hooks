import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import useTodoState from '../hooks/useTodoState'
import TodosProvider from '../contexts/TodosContext'

const TodoApp = () => {

  return (
    <>
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </>
  )
}

export default TodoApp
