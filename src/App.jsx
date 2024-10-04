import { useState } from 'react'
import Home from './components/Home'
import { Tentang } from './components/Tentang'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Home/>
          <Tentang  />
       </div>
    </>
  )
}

export default App
