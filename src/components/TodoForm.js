import React from 'react'
import useInputState from '../hooks/useInputState'

const TodoForm = ({ addTodo }) => {
  const [text, update, reset] = useInputState('')
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(text)
          reset()
        }}>
        <input type='text' value={text} onChange={update} />
      </form>
    </>
  )
}

export default TodoForm
