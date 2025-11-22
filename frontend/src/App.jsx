import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<>
              <Content />
          </>} />

          <Route path='register/' element={<Register/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
