import React, { useContext } from 'react'
import useInputState from '../hooks/useInputState'
import { DispatchContext } from '../contexts/TodosContext'

const TodoForm = () => {
  const [text, update, reset] = useInputState('')
  const dispatch = useContext(DispatchContext)
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch({ type: 'ADD', task: text })
          reset()
        }}>
        <input
          placeholder='Add New Todo'
          type='text'
          value={text}
          onChange={update}
          autoFocus
        />
      </form>
    </>
  )
}

export default TodoForm
