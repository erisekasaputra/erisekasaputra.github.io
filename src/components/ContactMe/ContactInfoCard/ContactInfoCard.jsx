import React from "react";
import "./ContactInfoCard.css";

const HandleClick = (href) => {
  if (href.startsWith('mailto:')) {
    window.location.href = href;
  } else {
    window.open(href, '_blank');
  } 
}

const ContactInfoCard = ({ iconUrl, text, href }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img 
          src={iconUrl} 
          alt={text} 
          onClick={() => HandleClick(href)}/>
      </div> 
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
