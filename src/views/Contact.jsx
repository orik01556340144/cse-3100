import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <p>
        We’d love to hear from you! Please use the form below to reach out to us with any
        questions, comments, or concerns.
      </p>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" placeholder="Enter your number" />
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;

