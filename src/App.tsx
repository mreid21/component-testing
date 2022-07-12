import FilterInput from './components/FilterInput'
import './App.scss'

export const options = [
  {
    name: 'milk',
    value: 5
  },
  {
    name: 'bread',
    value: 1
  },
  {
    name: 'eggs',
    value: 3
  }
]
function App() {

  return (
    <div className="container">
      <div className="input-container">
        <FilterInput options={options}></FilterInput>
      </div>
    </div>
  )
}

export default App
