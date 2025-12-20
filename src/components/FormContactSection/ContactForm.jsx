import React, { useState } from "react";
import "./cotactform.css";

const ContactForm = () => {
  const [service, setservice] = useState("Branding");
  const [budject, setbudject] = useState("under25");
  return (
    <section className="contact-form-section">
      <div className="contact-title">
        <h4>start a project</h4>
      </div>
      <div className="contact-forms">
        <div className="form-section">
          <label>
            <h4>Full name</h4>
            <input type="text" />
          </label>
          <label>
            <h4>Email</h4>
            <input type="email" />
          </label>
          <label>
            <h4>Current website</h4>
            <input type="text" />
          </label>
          <label>
            <h4>what service do you provide</h4>
            <div className="input-flexer">
              <button
                className={service === "Branding" ? "online" : ""}
                onClick={()=>setservice("Branding")}
              >
                Branding
              </button>
              <button
                className={service === "website" ? "online" : ""}
                onClick={()=>setservice("website")}
              >
                website
              </button>
              <button
                className={service === "brand+website" ? "online" : ""}
                onClick={()=>setservice("brand+website")}
              >
                brand+website
              </button>
            </div>
          </label>
          <label>
            <h4>tell us about ur project</h4>
            <div className="text-area">
              <input type="textarea" />
            </div>
          </label>
          <label>
            <h4>what is your budject range</h4>
            <div className="input-flexer">
              <button className={budject==="under10"?"online":""} onClick={()=>setbudject("under10")}>UNDER 10.000 USD</button>
              <button className={budject==="under25"?"online":""} onClick={()=>setbudject("under25")}>10–25.000 USD</button>
              <button className={budject==="under50"?"online":""} onClick={()=>setbudject("under50")}>25–50.000 USD</button>
            </div>
          </label>
          <label>
            <h4>how did you hear about as</h4>
            <input type="text" />
          </label>
          <div className="submit">
            <button>submit</button>
          </div>
        </div>
      </div>
      <div className="contact-captions">
        <p>
          Get in touch today, meet the team tomorrow, and let’s see if we are a
          good match for what you want to do and where you want to be.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
