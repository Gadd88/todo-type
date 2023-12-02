import React from 'react'
import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
    activeCount: number
    completedCount: number
    onClearCompleted: () => void
    filterSelected: FilterValue
    handlerFilterChange: (filter: FilterValue) => void
}

const Footer: React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    onClearCompleted,
    filterSelected,
    handlerFilterChange
}) => {
  return (
    <footer className='footer'>
        <span className="todo-count">
            <strong>{activeCount}</strong> tareas pendientes
        </span>
        <Filters
            filterSelected={filterSelected}
            onFilterChange={handlerFilterChange }/>
        {
            completedCount > 0 && (
                <button
                    className="clear-completed"
                    onClick={onClearCompleted}>Borrar Completados</button>
            )
        }
    </footer>
    )
}

export default Footer
