import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Research from './pages/Research';
// import Impact from './pages/Impact';
import Manifesto from './pages/Manifesto';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/research" element={<Research />} />
            {/* <Route path="/impact" element={<Impact />} /> */}
            <Route path="/manifesto" element={<Manifesto />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
