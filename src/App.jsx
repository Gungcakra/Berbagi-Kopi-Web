import { useState } from 'react'
import Home from './components/Home'
import { Tentang } from './components/Tentang'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Home/>
          <Tentang  />
          <Menu />
       </div>
    </>
  )
}

export default App
