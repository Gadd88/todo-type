import React from 'react'
import { type TodoString } from '../types'
import CreateToDo from './CreateToDo'

interface Props {
    onAddTodo: ({ title }: TodoString) => void
}
const Header: React.FC<Props> = ({ onAddTodo }: Props) => {
  return (
    <header className='header'>
        <h1>
            todo
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png"
                alt="typescript logo"
                width={60}/>
        </h1>
        <CreateToDo
            saveTodo={onAddTodo}/>
    </header>
  )
}

export default Header
