import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import { Burgers } from './pages/Main/Burgers'
import { Drinks } from './pages/Main/Drinks'
import { IceCreams } from './pages/Main/IceCreams'
import { Pizza } from './pages/Main/Pizza'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Burgers />} />
        <Route path='pizzas' element={<Pizza />} />
        <Route path='drinks' element={<Drinks />} />
        <Route path='ice-creams' element={<IceCreams />} />
      </Route>
    </Routes>
  )
}
