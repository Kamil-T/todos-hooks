import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'

export const TodosContext = createContext()

const TodosProvider = props => {
  const todosState = useTodoState()

  return (
    <TodosContext.Provider value={todosState}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosProvider
