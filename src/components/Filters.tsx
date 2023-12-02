import { type TODO_FILTERS, FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
    filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS] /* de esta forma podemos agregar otras constantes a los tipos y los importaria automaticamente, es mas mantenible */
    onFilterChange: FilterValue
}

export const Filters: React.FC<Props> = ({
    filterSelected,
    onFilterChange
}) => {
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'selected' : ''
                    return (
                        <li
                            key={key}>
                                <a
                                    href={href}
                                    className={className}
                                    onClick={(event) => {
                                        event.preventDefault() /* no se debe ejecutar el evento por defecto */
                                        onFilterChange(key as FilterValue)
                                    }}>{literal}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}
