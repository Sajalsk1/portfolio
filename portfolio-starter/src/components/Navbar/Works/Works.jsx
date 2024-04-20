import React from 'react'
import './Works.css'
import Upwork from '../../../img/Upwork.png'
import Amazon from '../../../img/amazon.png'
import Fiver from '../../../img/fiverr.png'
import Shopify from '../../../img/Shopify.png'
import Facebook from '../../../img/Facebook.png'

const Works = () => {
  return (
    <div className="works">
         <div className="awesome">
<span>My Awesome</span>
<span>Services</span>
<span>Lorem ipsum dolor sit amet illum obcaecati es sunt excepturi <br /> quas nesciunt illum obcaecati est neque aperiam ratione, odit, cumque  voluptatem voluptate? <br /> Lorem ipsum dolor sit amet illum obcaecati es sunt excepturi <br /> quas nesciunt illum obcaecati est neque aperiam ratione, odit, cumque  voluptatem voluptate?
</span>

<button className="button s-btn">Hire Me</button>

<div className="blur s-blur1" style={{background:"ABF1FF94"}}></div>
    </div>

    <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiver} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
    </div>
    </div>
  )
}

export default Works