import React, { useContext } from 'react'
import useInputState from '../hooks/useInputState'
import { DispatchContext } from '../contexts/TodosContext'

const EditTodoForm = ({ id, task, toggle }) => {
  const dispatch = useContext(DispatchContext)
  const [text, update, reset] = useInputState(task)

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch({ type: 'EDIT', id: id, newTask: text })
          reset()
          toggle()
        }}>
        <input type='text' value={text} onChange={update} autoFocus />
      </form>
    </>
  )
}

export default EditTodoForm
