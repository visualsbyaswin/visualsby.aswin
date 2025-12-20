import React, { useEffect } from "react";
import "./hero.css";
import MusicCard from "../Musiccard/Music";
import DecryptText from "../../Animations/DecryptText";
import { useState } from "react";
import { useGSAP } from "@gsap/react";


const Hero = ({
  line1 = "Turning Creative Ideas",
  line2 = "into Pixel-Perfect Websites",

  dutiesTitle = "Aswin",
  dutiesSubtitle = "(FRONTEND DEVELOPER & CREATIVE TECH)",

  helpTitle = "we help you:",
  helpList = [
    "Build fast, modern web experiences",
    "Create clean and consistent UI systems",
    "Bring your brand online with React & animations",
  ],


  locationCity = "india/kerala"
}) => {
  const [time,settime]=useState("");

  const isworkinghours=()=>{
    const now=new Date();
    const hour=now.getHours();
    return hour>-9&&hour<18;

  }
  const [workmode,serworkmode]=useState(isworkinghours());

  useEffect(()=>{
    const updateclock=()=>{
      const now=new Date();
      const localtime=now.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
      });
      serworkmode(isworkinghours())
      settime(localtime);
      
    }
    updateclock();
    const timer=setInterval(updateclock,60000);
    return ()=>clearInterval(timer)
  },[])

  useGSAP(()=>{
    
  })
  return (

    <section className="hero-section">




      <div className="hero-row">
        <div className="hero-headline">
          <div className="fh">
            <h1 className="decrypt">{line1}</h1>
          </div>

          <div className="fh">
            <h1 className="decrypt">{line2}</h1>
          </div>

          <MusicCard />
          <DecryptText selector=".decrypt" duration={1} />
        </div>

        <div className="hero-banner">

          {/* Duties */}
          <div className="banner fldr">
            <h4>{dutiesTitle}</h4>
            <div className="fldrcolumn">
              <div className="bround"></div>
              <h4>{dutiesSubtitle}</h4>
            </div>
          </div>

          {/* Help List */}
          <div className="banner b1lists">
            <div className="b1">
              <h4>{helpTitle}</h4>
            </div>
            <div className="b1list">
              {helpList.map((item, index) => (
                <h4 key={index}>— {item}</h4>
              ))}
            </div>
          </div>

          {/* Time & City */}
          <div className="banner btimes">
            <div className="b2">
              <h4>currently</h4>
              <div className={`b2round ${workmode ?"green":"red"}`}></div>
              <h4>{workmode ? "onduty":"off duty"}</h4>
            </div>
            <div className="b2">
              <h4>{time}</h4>
              <h4>{locationCity}</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
