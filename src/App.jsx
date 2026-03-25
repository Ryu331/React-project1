// import { useState } from 'react'
import {BrowserRouter, Route, Router, Routes,  } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Header from './component/Header'
import Footer from './component/Footer'
import Profile from './pages/Profile'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
