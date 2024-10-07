import { useState } from 'react'
import Home from './components/Home'
import { Tentang } from './components/Tentang'
import Menu from './components/Menu'
import Galery from './components/Galery'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div>
          <Home/>
          <Tentang  />
          <Menu />
          <Galery />
          <Footer />
       </div>
    </>
  )
}

export default App
