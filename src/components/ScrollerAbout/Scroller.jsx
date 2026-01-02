import React from "react";
import "./scroller.css";
import { aboutimages, aboutscrollertexts } from "../../assets/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
const Scroller = () => {
  useGSAP(()=>{
    const images=gsap.utils.toArray(".imgs")
    const sections=gsap.utils.toArray(".col-framer")

    images.forEach((img,i)=>{
      gsap.set(img,{clipPath:i===0?1:0});
    });

    sections.forEach((sec,index)=>{
      ScrollTrigger.create({
        trigger:sec,
        start:"top center",
        onEnter:()=>swapImage(index),
        onEnterBack:()=>swapImage(index),
      })
    })
  });
  

  function swapImage(index){
    gsap.to(".imgs",{duration:0.6,clipPath:`polygon(0% 64%, 5% 85%, 94% 28%, 13% 70%)`});
    gsap.to(`.imgs:nth-child(${index+1})`,{
      clipPath: `polygon(0% 100%,100% 100%,100% 0%,0% 0%)`,
      duration:0.6,
  ease:"power4.inOut"

    })
  }
  return (
    <section className="overview">
      <div className="first-contents">
        <h4>overview</h4>
      </div>
      <div className="right-contents">
        {aboutscrollertexts.map((item, index) => (
          <div className="framer-col col-framer" key={index}>
            <div className="framer-col-h2">
              <h4 >{item.head}</h4>
            </div>
            <div className="framer-col-p ">
              <p>{item.caption}</p>
                           <p>{item.caption1}</p>
                                        <p>{item.caption2}</p>
                                                     <p>{item.caption3}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="image-contents">
        {aboutimages.map((picture,i)=>(
            <img key={i} src={picture.img} alt="scrollers" className="imgs" />
        ))}
      </div>
    </section>
  );
};

export default Scroller;
