import { useState } from 'react'
import { HashRouter, BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main-div'>
        <Routes>
          <Route path="/SpotifyWrapped-Client" element={<Home />}/>
          <Route path="/SpotifyWrapped-Client/dashboard" element={<Dashboard />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
