import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Architecting Scalable Data Solutions That Drive Innovation</h2>
        <p>
          Hello, I'm Eris, 
          a dedicated Data Engineer passionate about leveraging cutting-edge technologies 
          to architect and implement scalable data solutions. 
          With a strong background in building distributed systems, designing robust microservices architectures, 
          and establishing efficient CI/CD pipelines, 
          I thrive on transforming complex data challenges into streamlined, high-performance solutions.
        </p>
      </div>

      <div className="hero-img">
        <div> 
          <img src="./assets/images/img11.png" alt="" />
        </div>  
      </div>
    </section>
  );
};

export default Hero;
