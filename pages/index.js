import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import MiddleMenu from '../components/home/MiddleMenu'
import Welcome from '../components/home/Welcome'
import Subscribe from '../components/home/Subscribe'
import Footer from '../components/home/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MiddleMenu />
      <Welcome />
      <Subscribe />
      <Footer />
    </>
  )
}
