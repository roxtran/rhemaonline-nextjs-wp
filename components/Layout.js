import { Children } from 'react'
import Footer from './home/Footer'
import Navbar from './home/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
