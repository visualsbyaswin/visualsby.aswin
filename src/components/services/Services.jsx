import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import "./service.css";
import { laps, sticky } from "../../assets/assets";
import SVGIconAroow from "../../assets/Arrow";
import { Link } from "react-router-dom";

const Services = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const cards = container.current.querySelectorAll(".service-sticks");

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <section className="services" ref={container}>
      <div className="service-sticks">
        <div className="service-count">
          <h4>Service 01</h4>
        </div>
        <div className="service-type">
          <h2>Brand</h2>
          <h4>
I help your brand stand out and shape the way users experience your business online. This builds trust, engagement, and long-term loyalty while strengthening your digital presence.
          </h4>
        </div>
        <div className="service-images">
          <img src={laps.lap1} alt="" />
          <div className="images-contents">
            <h4>Example</h4>
            <div className="bround"></div>
            <h4>( People made machines )</h4>
          </div>
        </div>
      </div>
      <div className="service-sticks">
        <div className="service-count">
          <h4>Service 02</h4>
        </div>
        <div className="service-type">
          <h2>Websites</h2>
          <h4>
            I build fast, secure, and visually consistent websites that showcase
            your brand. Using tools like react js and modern frontend tech, I
            deliver polished digital experiences quickly, helping you scale and
            iterate faster.
          </h4>
        </div>
        <div className="service-images">
          <img src={laps.lap2} alt="" />
          <div className="images-contents">
            <h4>Example</h4>
            <div className="bround"></div>
            <h4>( People made machines )</h4>
          </div>
        </div>
      </div>
      <div className="service-sticks ">
        <div className="process">
          <h4>process</h4>
        </div>
        <div className="process-cards">
          <div className="card-p">
            <p>
              We start by understanding your ambitions, goals and challenges to
              help us build a cohesive design language for maximum impact across
              key touch points.
            </p>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="card-content">
                <div className="head-card">
                  <h4>step 01</h4>
                  <div className="bround"></div>
                  <h4>(Define)</h4>
                </div>
                <div className="down-card">
                  <h4>— Frontend Strategy & Architecture</h4>
                  <h4>— Project Scoping & Feature Mapping</h4>
                  <h4>— Competitor Analysis & Benchmarking</h4>
                  <h4>— Information Architecture & Wireframes</h4>
                </div>
              </div>
              <div className="card-image">
                <img src={laps.lap3} alt="" />
              </div>
            </div>
            <div className="card y1">
              <div className="card-content">
                <div className="head-card">
                  <h4>step 02</h4>
                  <div className="bround"></div>
                  <h4>(Define)</h4>
                </div>
                <div className="down-card">
                  <h4>— UI / Visual Design</h4>
                  <h4>— Responsive Websites & Web Apps</h4>
                  <h4>— Branding Touchpoints (merch, icons, graphics)</h4>
                 
                </div>
              </div>
              <div className="card-image">
                <img src={laps.lap5} alt="" />
              </div>
            </div>
            <div className="card y2">
              <div className="card-content">
                <div className="head-card">
                  <h4>step 03</h4>
                  <div className="bround"></div>
                  <h4>(Define)</h4>
                </div>
                <div className="down-card">
                  <h4>— Production-Ready Frontend Development (React)</h4>
                  <h4>— Marketing & Social Media Assets</h4>
                  <h4>— Documentation & Design Systems</h4>
                  <h4>— Pitch Decks & Presentations</h4>
                </div>
              </div>
              <div className="card-image">
                <img src={laps.lap4} alt="" />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="service-about">
        <div className="venture-head">
          <h4>Ventures</h4>
        </div>
        <div className="venture-body">
          <div className="venture-slideshow">
            <img src={sticky.stick03} alt="" />
          </div>
          <div className="venture-texxts">
            <div className="venture-col">
              <p>
Occasionally, I partner with early-stage startups to exchange frontend and design expertise for a mix of cash and equity.
              </p>
              <p>
             By trading creative capital, founders gain access to high-quality web development, UI/UX design, and interactive prototypes without the upfront cost of hiring a full-time frontend team or working with a traditional agency. This allows you to focus on building your product and growing your brand—without stretching your runway.
              </p>
              <p>
                Got a bold idea and a clear vision? Let’s build something
                remarkable together.
              </p>
            </div>
            <div className="">
              <Link to="/visualsbyaswin/contact">
                <div className="onlybutton">
                  <h4>Book a call</h4>
                  <SVGIconAroow />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
