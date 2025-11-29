import logo from './logo.svg';
import './App.css';

import Profile from "./Portfolio/profile.jsx";
import Navbar from "./Navbar/Nav.jsx";
import About from "./Portfolio/About.jsx";
import Skills from "./Portfolio/Skills.jsx";
import Projects from "./Portfolio/Projects.jsx";
import Certificate from './Portfolio/Certi.jsx';
import Contact from './Portfolio/Contact.jsx';
import Footer from './Portfolio/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
      <Projects/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
