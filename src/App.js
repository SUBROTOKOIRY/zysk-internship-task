import './App.css';
import Navbar from './components/Navbar';
import LandingScreen from './pages/LandingScreen';
import Features from './pages/Features';
import Analytics from './pages/Analytics';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <LandingScreen />
      <Features />
      <Analytics />
      <Faq />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;
