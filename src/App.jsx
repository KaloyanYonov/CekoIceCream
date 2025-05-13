import './App.css'
import {Routes, Route , Link} from 'react-router-dom'
import { Hero } from './pages/Hero'
import { MainPage } from './pages/MainPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Hero/>}/>
        <Route path='/main' element={<MainPage/>} />
      </Routes>
    </>
  )
}

export default App
