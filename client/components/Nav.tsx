// import { ContinentData } from '../../data/continents.ts'
import { Link } from 'react-router-dom'
import data from '../../data/continents.ts'

const list = Object.keys(data).map((key) => ({
  name: key,
}))
// console.log(list[1].name)

function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {list.map((continent) => (
          <li key={continent.name}>
            <Link to={`continent/${continent.name}`}>{continent.name}</Link>
          </li>
        ))}
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
