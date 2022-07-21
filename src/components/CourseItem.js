import React from 'react'
import ReactTooltip from 'react-tooltip'

function CourseItem({image, name, priceHalf, priceQuart, priceHour, description, details}) {
  return (
    <div>
    <div className='courseItem' data-tip data-for="global">
        <div style={{ backgroundImage: `url(${image})`}}> </div>
        <h1> {name} </h1>
        <p> 30 min: ${priceHalf} </p> 
        <p> 45 min: ${priceQuart} </p> 
        <p> 60 min: ${priceHour} </p> 
        <p className='deets'>{details}</p>
    </div>
    <ReactTooltip id="global" place="top" effect="solid" aria-haspopup='true'>Login to register</ReactTooltip>
    </div>
  )
}

export default CourseItem