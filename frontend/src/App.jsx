import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
