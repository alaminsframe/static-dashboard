import { useState } from 'react'
import './index.css'
import SideBar from './components/side-bar';
import MainHeader from './components/main-header';
import Content from './components/content';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainHeader />
      <SideBar />
      <Content />
    </>
  )
}

export default App
