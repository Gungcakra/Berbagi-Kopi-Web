import { useState } from 'react'
import Home from './components/Home'
import { Tentang } from './components/Tentang'
import Menu from './components/Menu'
import Galery from './components/Galery'
function App() {

  return (
    <>
      <div>
          <Home/>
          <Tentang  />
          <Menu />
          <Galery />
       </div>
    </>
  )
}

export default App
