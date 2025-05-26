import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <img src="https://www.littlelemon.com/logo.png" alt="Little Lemon Logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <Main />
      <Footer />
      <img src="https://www.littlelemon.com/logo.png" alt="Little Lemon Logo" />
      <ul>
        <li>Contact</li>
        <li>Doormat Navigation</li>
        <li>Social Links</li>
      </ul>
    </>

  );
}

export default App;
