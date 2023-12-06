import React from 'react'
import { type ListOfTodos, type Todo as TodoType } from '../types'
import Todo from './Todo'

interface Props {
    todos: ListOfTodos
    handleRemove: ({ id }: Pick<TodoType, 'id'>) => void
    handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todos: React.FC<Props> = ({ todos, handleRemove, handleCompleted }) => {
  return (
    <ul className='todo-list'>
        {
            todos.map(todo => (
                <li
                    key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}>
                        <Todo
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            handleCompleted={handleCompleted}
                            handleRemove={handleRemove}
                            />
                </li>
            ))
        }
    </ul>
  )
}

export default Todos
