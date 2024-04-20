import React from 'react'
import './Services.css'
import Card from '../Card/Card';
import glasses from "../../../img/glasses.png";
import humble from "../../../img/humble.png";
import Resume from './Resume.pdf'

const Services = () => {
  return (
    <>
    <div className="services">
        <div className="awesome">
<span>My Awesome</span>
<span>Services</span>
<span>Lorem ipsum dolor sit amet illum obcaecati es sunt excepturi <br /> quas nesciunt illum obcaecati est neque aperiam ratione, odit, cumque  voluptatem voluptate?
</span>
<a href={Resume} download>
<button className="button s-btn">Downolad CV</button>
</a>
<div className="blur s-blur1" style={{background:"ABF1FF94"}}></div>
    </div>
   
      <div className="cards">
        
          <Card
            emoji={humble}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
      
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
       
       
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    
      </div>
    </>
  )
}

export default Services