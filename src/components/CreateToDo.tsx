import React, { useState } from 'react'
import { type TodoString } from '../types'

interface Props {
    saveTodo: ({ title }: TodoString) => void
}

const CreateToDo: React.FC<Props> = ({ saveTodo }: Props) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        saveTodo({ title: inputValue })
        setInputValue('')
    }

    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            className='new-todo'
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder='Revisar los horarios de clases...'
            autoFocus
            />
    </form>
  )
}

export default CreateToDo
