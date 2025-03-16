import { HashRouter, BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Handler from './pages/Handler'


function App() {
  return (
    <BrowserRouter basename='/SpotifyWrapped-Client/'>
      <Header />
      <div className='main-div'>
        <Routes>
          <Route exact path="/" element={<Handler />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
