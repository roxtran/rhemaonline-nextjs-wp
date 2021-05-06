import Footer from './Footer'
import Navbar from './Nav/Navbar'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
