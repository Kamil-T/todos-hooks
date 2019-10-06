import React, { useContext } from 'react'
import useInputState from '../hooks/useInputState'
import { TodosContext } from '../contexts/TodosContext'

const EditTodoForm = ({ id, task, toggle }) => {
  const { editTodo } = useContext(TodosContext)
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
