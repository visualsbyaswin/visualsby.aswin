import React from "react";
import Hero from "../components/Hero/Hero";


import ContactMe from "../components/contactpeoples/ContactMe";


import ContactForm from "../components/FormContactSection/ContactForm";

const Contact = () => {
  return (
    <main className="contact">
      <Hero
        line1="Let’s build a brand"
        line2="and business that lasts
"
      />
  <ContactMe/>
<ContactForm/>
    </main>
  );
};

export default Contact;
