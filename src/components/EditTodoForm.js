import React from 'react'
import useInputState from '../hooks/useInputState'

const EditTodoForm = ({ id, task, editTodo, toggle }) => {
  const [text, update, reset] = useInputState(task)

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          editTodo(id, text)
          reset()
          toggle()
        }}>
        <input type='text' value={text} onChange={update} autoFocus />
      </form>
    </>
  )
}

export default EditTodoForm
