import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import HomePage from './pages'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/*' element={<Navigate to='/' />} />
          <Route path='/dashboard/*' element={
            <>
              <Routes>
                <Route path='/' element={<h1>MAIN</h1>} />
                <Route path='/user-profile' element={<h1>USER PROFILE</h1>}/>
              </Routes>
            </>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
