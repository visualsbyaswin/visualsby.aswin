import React from "react";
import "./contactme.css";
import { player } from "../../assets/assets";
const ContactMe = () => {
  return (
    <section className="contactme">
      <div className="twoman-container">
        <div className="contact-heading-text">
          <h4>contact</h4>
        </div>
        <div className="two-man-card">
          <div className="two-man-para">
            <h4>
           With so many developers and studios out there, choosing the right frontend partner can be tough. I aim to make that decision easy and confident by delivering clean, efficient, and visually engaging digital experiences from the start.
            </h4>
          </div>
          <div className="two-cards">
            <div className="first-card">
              <h4>BRAND design</h4>
              <img src={player.profile} alt="" />
              <div className="two-card-names">
                <div className="bround"></div>
                  <h4>visuals.aswin@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="twoman-information">
        <div className="infocol-1">
   
                <h4>visuals.aswin@gmail.com</h4>
          <h4>+47 960 45 353</h4>
        </div>
        <div className="infocol-2">
                    <h4>location</h4>
          <h4>by aswin</h4>
          <h4>kerala/india</h4>

          <h4>679506 pin</h4>
          
          
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
