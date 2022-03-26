import React from 'react';
import './index.css'
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <><Router>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </div>
  </Router>
    </>
  );
}

export default App;
