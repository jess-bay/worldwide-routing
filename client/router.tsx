import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Continent from './components/Continent.tsx'
import Country from './components/Country.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/continent/:id" element={<Continent />} />
      <Route path="/continent/:id/:code" element={<Country />} />
    </Route>
  )
)

export default router
