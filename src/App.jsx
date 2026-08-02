import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SummerProgram from './pages/SummerProgram.jsx';
import ContactUs from './pages/ContactUs.jsx';
import LearnHub from './pages/learn/LearnHub.jsx';
import CourseHome from './pages/learn/CourseHome.jsx';
import LessonPage from './pages/learn/LessonPage.jsx';
import AssessmentPage from './pages/learn/AssessmentPage.jsx';
import CertificatePage from './pages/learn/CertificatePage.jsx';
import Navigation from './components/Navigation.jsx';
import Leadership from './pages/Founders.jsx';
import PolicyTeam from './pages/PolicyTeam.jsx';
import SocialMediaTeam from './pages/SocialMediaTeam.jsx';
import Chapters from './pages/Chapters.jsx';
import JoinUs from './pages/JoinUs.jsx';
import Hackathon from './pages/Hackathon.jsx';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/summer-program' element={<SummerProgram />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/founders' element={<Leadership />} />
            <Route path='/policy-team' element={<PolicyTeam />} />
            <Route path='/social-media-team' element={<SocialMediaTeam />} />
            <Route path='/chapters' element={<Chapters />} />
            <Route path='/join-us' element={<JoinUs />} />
            <Route path='/hackathon' element={<Hackathon />} />
            <Route path='/learn' element={<LearnHub />} />
            <Route path='/learn/:courseSlug' element={<CourseHome />} />
            <Route path='/learn/:courseSlug/assessment' element={<AssessmentPage />} />
            <Route path='/learn/:courseSlug/certificate' element={<CertificatePage />} />
            <Route path='/learn/:courseSlug/:lessonId' element={<LessonPage />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;