import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contactMe' element={<ContactMe/>}/>
      </Routes>
    </>
  )
}

export default App
