import React, { useContext, memo } from 'react'
import useToggle from '../hooks/useToggle'
import EditTodoForm from './EditTodoForm'
import { DispatchContext } from '../contexts/TodosContext'

const Todo = ({ id, task, completed }) => {
  const dispatch = useContext(DispatchContext)
  const [isEditing, toggle] = useToggle()
  return (
    <>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggle={toggle} />
      ) : (
        <div>
          <input
            type='checkbox'
            defaultChecked={completed}
            onClick={() => dispatch({ type: 'TOGGLE', id: id })}
          />
          {task}
          <button onClick={() => dispatch({ type: 'REMOVE', id: id })}>
            X
          </button>
          <button onClick={toggle}>Edit</button>
        </div>
      )}
    </>
  )
}

export default memo(Todo)
