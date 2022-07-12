import {useState} from 'react'


type Filterable = {
  name: string
  value: any
}
type FilterInputProps = {
  options: Filterable[]
}
export default function FilterInput(props: FilterInputProps) {

  const [filterInput, setFilterInput] = useState('')

  const _filter = (options: Filterable[]): Filterable[] => {

    if (filterInput) return options.filter(opt => opt.name.toLowerCase().includes(filterInput.toLowerCase()))

    return options
  }

  return (
    <>
      <div data-testid="filter-input" className='filter-input__wrapper'>
        <input onChange={(e) => setFilterInput(e.target.value)} type="text" placeholder='type something' name="filter-input" id="filter-input" className='filter-input'/>
        <ul className="filter-input__dropdown">
          {_filter(props.options).map((opt, index) => <li className='dropdown__item' key={index}>{opt.name}</li>)}
        </ul>
      </div>
    </>
  )
}
