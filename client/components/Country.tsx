import { useParams } from 'react-router-dom'
import data from '../../data/countries.ts'

interface Country {
  code: string
  name: string
  capital: string
  areaSqKms: string
  population: string
  currencyCode: string
  currencyName: string
  neighbours: string
  flag: string
}

function Country() {
  const params = useParams()
  const continentName = params.id
  const countryName = params.code

  const foundCountry = data.find(
    (country) => countryName === country.code
  ) as Country
  const neighbouringCountries = foundCountry.neighbours.split(',')

  return (
    <div>
      <p>Take a look at {foundCountry.name}!</p>
      <ul>
        <li>
          <strong>Capital:</strong> {foundCountry.capital}
        </li>
        <li>
          <strong>Area (m2):</strong> {foundCountry.areaSqKms}
        </li>
        <li>
          <strong>Population:</strong> {foundCountry.population}
        </li>
        <li>
          <strong>Currency:</strong> {foundCountry.currencyCode}
        </li>
        <li>
          <strong>Currency Name:</strong> {foundCountry.currencyName}
        </li>
        {foundCountry.neighbours && (
          <li>
            <strong>Neighbouring Countries:</strong>{' '}
            {neighbouringCountries.join(', ')}
          </li>
        )}
        <li>
          <strong>Flag:</strong> {foundCountry.flag}
        </li>
      </ul>
    </div>
  )
}

export default Country
