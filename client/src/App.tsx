import React from 'react';
import './index.css'
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <><Router>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/register' element={<Home />} />
      </Routes>
    </div>
  </Router>
    </>
  );
}

export default App;
