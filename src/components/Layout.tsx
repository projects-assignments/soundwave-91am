import { NavBar } from './Navbar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
  )
}
