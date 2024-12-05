import { useState } from 'react'
import './index.css'
import SideBar from './components/side-bar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar />
    </>
  )
}

export default App
