import React, { useContext } from 'react'
import Todo from './Todo'
import { TodosContext } from '../contexts/TodosContext'

const TodoList = () => {
  const todos = useContext(TodosContext)

  return (
    <div>
      {todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
