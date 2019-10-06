import React, { useContext } from 'react'
import useToggle from '../hooks/useToggle'
import EditTodoForm from './EditTodoForm'
import { TodosContext } from '../contexts/TodosContext'

const Todo = ({ id, task, completed }) => {
  const { removeTodo, toggleTodo } = useContext(TodosContext)
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
            onClick={() => toggleTodo(id)}
          />
          {task}
          <button onClick={() => removeTodo(id)}>X</button>
          <button onClick={toggle}>Edit</button>
        </div>
      )}
    </>
  )
}

export default Todo
