import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../components/Home'
import Shop from '../components/Shop'
import Navbar from '../components/Navbar'
import './styles/styles.css'

function App() {

  return (
    <div className="App">
    <Navbar></Navbar>
    <div className='page-content'>

    </div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
     </Routes>
    </div>
  )
}

export default App
