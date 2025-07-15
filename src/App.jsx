import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SummerProgram from './pages/SummerProgram.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Learn from './pages/Learn.jsx';
import Navigation from './components/Navigation.jsx';
import Founders from './pages/Founders.jsx';
import PolicyTeam from './pages/PolicyTeam.jsx';
import Chapters from './pages/Chapters.jsx';
import JoinUs from './pages/JoinUs.jsx';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/summer-program' element={<SummerProgram />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/founders' element={<Founders />} />
            <Route path='/policy-team' element={<PolicyTeam />} />
            <Route path='/chapters' element={<Chapters />} />
            <Route path='/join-us' element={<JoinUs />} />
            <Route path='/learn' element={<Learn />} />
          </Routes>
        </main>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;