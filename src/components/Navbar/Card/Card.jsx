import React from 'react'
import './Card.css'

const Card = ({emoji,heading,detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading} <br />{detail} </span>
        <button className="c-btn">Learn More</button>
    </div>
  )
}

export default Card