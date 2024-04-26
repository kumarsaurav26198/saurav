import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
      <div className="typewriter-container">
        <Typewriter
          options={{
            strings: [
              "React Js (Web) ",
              "React Native (Android & iOS)",
              "Committed Open Source Contributor",
              "Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 20,
          }}
        />
      </div>

      )
}

export default Type