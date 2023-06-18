import React from "react";
import "../styles/Contact.css";

function contactPage() {
  return (
    <div className="contact">
      <div className="leftSid"></div>
      <div className="rightSid">
        <h1>Contact Us</h1>
        <form method="POST">
          <label htmlFor="name">Fullname</label>
          <input type="text" for="name" placeholder="Enter your name..." />

          <label htmlFor="email">Email</label>
          <input type="text" for="email" placeholder="Enter your email..." />

          <label htmlFor="message"></label>
          <textarea
            name="message"
            id=""
            cols="20"
            rows="5"
            placeholder="Enter your message..."
          ></textarea>
          <button>Message Us</button>
        </form>
      </div>
    </div>
  );
}

export default contactPage;
