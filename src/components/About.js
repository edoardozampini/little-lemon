import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h1>About</h1>
        <h2>A big Family</h2>
        <p>
          Lorem Ipsum dhnos isioppo siio soplèpès sèpp siopkos okso suud lorem busfta facidus.
          Lorem Ipsum dhnos isioppo siio soplèpès sèpp siopkos okso suud lorem busfta facidus.
          Lorem Ipsum dhnos isioppo siio soplèpès sèpp siopkos okso suud lorem busfta facidus.
        </p>
      </div>
      <div className="about-images">
        <img src="/images/mario-and-adrian.jpg" alt="About 1" className="img1" />
        <img src="/images/restaurant.jpg" alt="About 2" className="img2" />
      </div>
    </section>
  );
}

export default About;