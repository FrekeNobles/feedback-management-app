import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConferenceHall from './pages/ConferenceHall';
import BusinessSolutions from './pages/BusinessSolutions';
import Landingpage from './pages/Landingpage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
         <Route path="/conference" element={<ConferenceHall/>}/>
        <Route path="/business" element={<BusinessSolutions/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
