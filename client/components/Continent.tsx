import { Link, useParams } from 'react-router-dom'
import data from '../../data/continents.ts'

function Continent() {
  const params = useParams()

  const continent = data[params.id as string]
  const countries = continent.countries

  return (
    <div>
      <p>Countries in {params.id}</p>
      <img src={`/images/${continent.image}`} alt="" />
      <ul>
        {countries.map((item) => (
          <li key={item.code}>
            <Link to={`/continent/${continent.name}/${item.code}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Continent
