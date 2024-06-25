import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="erisekasaputra282000@gmail.com"
            href="mailto:erisekasaputra282000@gmail.com"
          /> 
        
        </div>

        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="./assets/images/linkedin-icon.svg"
            text="Eris Eka Saputra"
            href="https://www.linkedin.com/in/eris-eka-saputra/"
          /> 
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
