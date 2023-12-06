import React from 'react'
import { type TodoId, type Todo as TodoType, type TodoCompleted } from '../types'

interface Props extends TodoType {
  handleRemove: ({ id }: Pick<TodoType, 'id'>) => void
  handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
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
            id={title}
            onChange={handleChangeCheckbox} />
        <label htmlFor={title}>{title}</label>
        <button
            className='destroy'
            onClick={() => { handleRemove({ id }) }}
            />
    </div>
  )
}

export default Todo
