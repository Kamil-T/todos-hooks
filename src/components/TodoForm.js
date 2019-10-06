import React, {useContext} from 'react'
import useInputState from '../hooks/useInputState'
import { TodosContext } from '../contexts/TodosContext'


const TodoForm = () => {
  const [text, update, reset] = useInputState('')
  const {addTodo} = useContext(TodosContext)
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(text)
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
