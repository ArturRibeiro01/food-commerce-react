import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import { Burgers } from './pages/Main/Burgers'
import { Pizza } from './pages/Main/Pizza'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Burgers />} />
        <Route path='pizza' element={<Pizza />} />
      </Route>
    </Routes>
  )
}
