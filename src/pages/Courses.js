import React from 'react';
import CourseItem from '../components/CourseItem';
import { CourseList } from "../helpers/CourseList";
import "../styles/Courses.css"

function Courses() {
  return (
    <div className='courses'>
      <h1 className='courseTitle'>Courses Offered</h1>
      <div className='courseList'>
        { CourseList.map((courseItem, key) => {
          return (
          <CourseItem 
            key = {key}
            image={courseItem.image} 
            name={courseItem.name} 
            priceHalf={courseItem.priceHalf} 
            priceQuart={courseItem.priceQuart} 
            priceHour={courseItem.priceHour} 
            description={courseItem.description}
            details={courseItem.details}
          />
          );
        })}
      </div>
    </div>
  )
}

export default Courses