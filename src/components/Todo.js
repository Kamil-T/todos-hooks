import React from 'react'
import useToggle from '../hooks/useToggle'
import EditTodoForm from './EditTodoForm'

const Todo = ({ id, task, completed, removeTodo, toggleTodo, editTodo }) => {
  const [isEditing, toggle] = useToggle()
  return (
    <>
      {isEditing ? (
        <EditTodoForm id={id} task={task} editTodo={editTodo} toggle={toggle} />
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
