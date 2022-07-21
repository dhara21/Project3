import React from 'react';
import Person from "../assets/sw1.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${Person})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us for any queries at: <br></br> Email address: kirkland@swimming.com <br></br> Phone number: 123 345 5567</p>
            <form id="contact form">
                <label htmlFor='name'>Full Name</label>
                <input name="name" placeholder="Enter full name" type="text" />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email" type="email" />
                <label htmlFor='message'>Message</label>
                <textarea rows="6" placeholder='Enter message' name="message" required> </textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact