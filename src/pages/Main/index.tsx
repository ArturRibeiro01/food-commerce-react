import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import { SideBar } from '../../components/Sidebar'

import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <SideBar />
      <section>
        <img src={logoImg} alt='Logomarca do Site' />
        <Outlet />
      </section>
    </Container>
  )
}
