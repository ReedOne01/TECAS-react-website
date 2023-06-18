import React from "react";
import "../styles/Home.css";
import { homeBanner } from "../assets/homeBanner.webp";

function Home() {
  return (
    <div className="background">
      <div className="content">
        <p>Welcome to</p>
        <h1>
          The Emirate <br /> College Of Advanced <br /> Studies
        </h1>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Home;
