import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.css'
import ReactCardFlip from 'react-card-flip';
import HelloWorld from "./components/helloWorld";

const CardFlip = () =>{
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className = 'front'>
              Front of the card.
              <button onClick={handleClick}>Click to flip</button>
          </div>
  
          <div className = 'back'>
              Back of the card.
              <button onClick={handleClick}>Click to flip</button>
          </div>
        </ReactCardFlip>
    )
};

ReactDOM.render(<CardFlip />, document.querySelector("#root"));

/* import StartApp from "./components/startApp";
import Game from "./components/tictactoe";

ReactDOM.render(<Game />, document.getElementById("root")); */
