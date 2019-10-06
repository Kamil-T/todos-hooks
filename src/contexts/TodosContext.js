import React, { createContext } from 'react'
import TodoReducer from '../reducers/TodoReducer'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'

export const TodosContext = createContext()
export const DispatchContext = createContext()

const TodosProvider = props => {
  const [todos, dispatch] = useLocalStorageReducer('todos', [], TodoReducer, [])

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}

export default TodosProvider
