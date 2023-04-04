import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Itempage from './Pages/Itempage'
import Nav from './Components/Nav'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/item' element={<Itempage />} />
      </Routes>
    </div>
  )
}

export default App
