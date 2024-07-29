import React from 'react';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
      <Router>
       <Header/>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
           
          </Routes>
       
      </Router>
  
  );
}

export default App;
