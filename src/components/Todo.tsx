import React from 'react'
import { type TodoId, type Todo as TodoType, type TodoCompleted } from '../types'

interface Props extends TodoType {
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({ id, completed }: { id: TodoId, completed: TodoCompleted } ) => void
}
const Todo: React.FC<Props> = ({ id, title, completed, handleRemove, handleCompleted }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleCompleted({
      id,
      completed: event.target.checked
    })
  }
  return (
    <div className='view'>
        <input
            className='toggle'
            type="checkbox"
            checked={completed}
            onChange={handleChangeCheckbox} />
        <label>{title}</label>
        <button
            className='destroy'
            onClick={() => { handleRemove({ id }) }}
            />
    </div>
  )
}

export default Todo
