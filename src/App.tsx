import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Todos from './components/Todos'
import { TODO_FILTERS } from './consts'
import { type FilterValue, type TodoString, type Todo as TodoType } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Repasar Zustand',
    completed: true
  },
  {
    id: '2',
    title: 'Practicar proyectos con typescript',
    completed: false
  },
  {
    id: '3',
    title: 'Terminar el portfolio',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: Pick<TodoType, 'id'>): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = (
    { id, completed }: /* { id: TodoId, completed: TodoCompleted } */ Pick<TodoType, 'id' | 'completed'>
    ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handlerFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handlerRemoveCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoString): void => {
    // no hace falta poner title: title, ya que key = value
    const newTodo = { title, id: crypto.randomUUID(), completed: false }
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <div className='todoapp'>
      <Header
        onAddTodo={handleAddTodo}/>
      <Todos
        todos={filteredTodos}
        handleRemove={handleRemove}
        handleCompleted={handleCompleted}/>
      <Footer
        activeCount={activeCount}
        filterSelected={filterSelected}
        completedCount={completedCount}
        onClearCompleted={handlerRemoveCompleted}
        handlerFilterChange={handlerFilterChange}/>
    </div>
  )
}

export default App
