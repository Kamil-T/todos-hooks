import React, { createContext, useReducer } from 'react'
import TodoReducer from '../reducers/TodoReducer'

export const TodosContext = createContext()
export const DispatchContext = createContext()

const TodosProvider = props => {
  const [todos, dispatch] = useReducer(TodoReducer, [])

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}

export default TodosProvider
