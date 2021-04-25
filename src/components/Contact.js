import React from "react";
import ButtonCon from "./ButtonCon";

function Contact() {
  return (
    <section className="form">
      <div id="form">
        <h3>Join Our Mailing List</h3>
        <form>
          <input type="text" name="name" placeholder="Enter your name here" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email here"
          />
          <div id="form-text">
            <p>We promise not to spam you!</p>
          </div>
          <ButtonCon />
        </form>
      </div>
    </section>
  );
}

export default Contact;  
