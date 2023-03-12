import React from 'react'
import Card from './Card'
import {Work, Study, Play, Excercise, Social, Selfcare } from "./Worksvg"

const CardContainer = ({hours, time}) => {
const getColor = ((index) => {
  switch (index) {
    case 0:

       return "hsl(15, 100%, 70%)";
      

    case 1:
      return "hsl(195, 74%, 62%)";


    case 2:
      return "hsl(348, 100%, 68%)";


    case 3:
      return "hsl(145, 58%, 55%)";


    case 4:
      return "hsl(264, 64%, 52%)";


    case 5:
      return "hsl(43, 84%, 65%)";

  }
})
const getSvg = ((index) => {
  switch (index) {
    case 0:

       return <Work/>;
      

    case 1:
      return <Play/>


    case 2:
      return <Study/>;


    case 3:
      return <Excercise/>;


    case 4:
      return <Social/>;


    case 5:
      return <Selfcare/>;

  }
})
  return (
    <div className="card-container">
      {hours.map( (hour, index, key) => {

        return (

        
        <Card
        key = {index}
        color={getColor(index)}
        title= {hour.title}
        hrs={hour.timeframes[time].current}
        prevHrs={hour.timeframes[time].previous}
        svg= {getSvg(index)}  
      />)
      })}
    </div>
  )
}

export default CardContainer