import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu.js';
import Testimonials from './components/Testimonials.js';
import About from './components/About.js';


function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Menu />
      <Testimonials />
      <About />
      <Footer />
    </>

  );
}

export default App;
