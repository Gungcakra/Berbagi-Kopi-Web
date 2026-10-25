import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/NavBar'
import Home from './components/Home'
import Highlights from './components/Highlights'
import { Tentang } from './components/Tentang'
import Menu from './components/Menu'
import Event from './components/Event'
import Galery from './components/Galery'
import Lokasi from './components/Lokasi'
import Footer from './components/Footer'

function App() {
  // AOS is initialised once here instead of in every section
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Highlights />
        <Tentang />
        <Menu />
        <Event />
        <Galery />
        <Lokasi />
      </main>
      <Footer />
    </>
  )
}

export default App
