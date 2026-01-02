import React from "react";
import "./about.css";
import SVGIconAroow from "../../assets/Arrow";
import InfiniteSlider from "../../Animations/InfiniteSlider";
import { aboutimages, gifs, sticky } from "../../assets/assets";
import { runDecrypt } from "../../Animations/HoverDecrypt";
const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-contents">
        <div className="only-about">
          <h4 className="decrypt">ABOUT</h4>
        </div>
        <div className="only-contents">
          <h4>by aswin</h4>
          <h4>
i craft beautiful and funcional web experiences that delight users. from concept to deployment,i bring ideas to life with clean code and a keen eye for design,ensuring seamless user intractions and visually stunning interfaces
          </h4>
          <div
            className="onlybutton"
        
          >
            <h4>VIEW SERVICES</h4>
            <SVGIconAroow />
          </div>
        </div>
      </div>
      <div className="about-marquee">
        <div className="marquee">
          <div className="marquee-track">
            {[...gifs, ...gifs].map((item, i) => (
              <div className="item" key={i}>
                <img src={item.imgs} alt="allabout" />
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-text">
          <div className="carosal">
            <div className="group">
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
            </div>
            <div className="group" aria-hidden>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
              <div className="text-card">
                <div className="bround"></div>
                <h4>Open to Frontend / Web Development roles — Q1 2026</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
