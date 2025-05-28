import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src="/images/logo.svg" alt="Little Lemon Logo" />
          <p>Little Lemon, Chicago</p>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br/>123 Main St, Chicago, IL 60601</li>
            <li>Phone: <br/>+1 555-123-4567</li>
            <li>Email: <br/>little@lemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Links</h3>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Tik Tok</a></li>
          </ul>
        </div>
      </section>

    </footer>

  );
}

export default Footer;