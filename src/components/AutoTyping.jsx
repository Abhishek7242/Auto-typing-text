import React from 'react'
import '../css/AutoTyping.css'
import { TypeAnimation } from "react-type-animation";
const AutoTyping = () => {
  return (
    <div>
      <h1>
        I am{" "}
        <TypeAnimation
          sequence={[
            "Abhishek Verma",
            5500,
            "a Programmer",
            2500,
            "a Web Developer",
            2500,
            "a UI/UX Designer",
            10000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block", color: "yellow" }} 
          repeat={Infinity}
        />
      </h1>
    </div>
  );
}

export default AutoTyping
