import React from 'react';
import Swim from "../assets/pic2.png";
import '../styles/Hours.css';

function Hours() {
  return (
    <div className='hours'>
        <div className='hoursTop' style={{backgroundImage: `url(${Swim})`}}></div>
        <div className='hoursBottom'>
            <h1> Pool Hours </h1>
            <p>The pool is open to all members. Registration is required for general and lane swim in
                 order to maintain the maximum number of swimmers allowed in the pool. 
                Please login to register and book your preferred time-slot for swimming.
                Swimming pool is open throughout the week at the following times, except for holidays.
            </p>
            <h2 className='title'>Summer 2022 Course Dates</h2>
            <p className='info'>All lessons are available during the following sessions: <br></br>
                Session 1: June 1- July 22 <br></br>
                Session 2: July 4 - August 26 <br></br>
                Session 3: July 23 - September 2
            </p>
            <h2 className='title'>Hours:</h2>
            <p class="info">Mon: 9:00 am - 6:00 pm <br></br>
                    Tue: 9:00 am - 6:00 pm <br></br>
                    Wed: 10:00 am - 6:00 pm <br></br>
                    Thu: 9:00 am - 6:00 pm <br></br>
                    Fri: 10:00 am - 8:00 pm <br></br>
                    Sat: 8:00 am - 8:00 pm <br></br>
                    Sun: 8:00 am - 5:00 pm
            </p>
        </div>
    </div>
  )
}

export default Hours