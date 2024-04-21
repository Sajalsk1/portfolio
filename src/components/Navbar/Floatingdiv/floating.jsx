import React from 'react'
import './floating.css'

const Floatingdiv = ({image,txt1,txt2}) => {
  return (
    <div className="floating">
        <img src={image} alt="" />
        <span>{txt1} <br /> {txt2}</span>
    </div>
  )
}

export default Floatingdiv;