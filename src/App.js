import './App.css';
import ResponsiveAppBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import AboutMe from './Components/AboutMe';
import ProjectDisplay from './Components/ProjectDisplay';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <LandingPage />
      <AboutMe />
      <ProjectDisplay />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
