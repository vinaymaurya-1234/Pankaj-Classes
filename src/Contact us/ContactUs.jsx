import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Get in Touch with Pankaj Classes</h1>
        <p>We’re here to help you on your learning journey. Reach out anytime!</p>
      </header>

      <section className="contact-form-section">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>215, Mahakali Caves, Andheri East</p>
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
          <h3>Email</h3>
          <p>support@pankajclasses.com</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;