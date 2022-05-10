import React from 'react'

import './App.css'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Contact/>
    </div>
  );
}

export default App;
