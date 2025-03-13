import { useState } from 'react'
import { HashRouter, BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'


function App() {
  return (
    <HashRouter>
      <Header />
      <div className='main-div'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
