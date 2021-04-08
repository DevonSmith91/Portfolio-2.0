import React, { useState, useEffect } from "react";
import Picture from "../Images/pc-three.jpg";
import ReactCardFlip from "react-card-flip";

export default function AboutMe() {
	const [isFlipped, setIsFlipped] = useState(false);
	const [containerClass, setContainerClass] = useState("flipCardContainerLeft")

  const handleClick = () => {
		setIsFlipped(!isFlipped);
		if (containerClass === "flipCardContainerLeft") {
			setContainerClass("flipCardContainerLeft rightContainer")
			setTimeout(() => {
				setContainerClass("flipCardContainerRight")
			})
		} else {
			setContainerClass("flipCardContainerRight leftContainer")
			setTimeout(() => {
				setContainerClass("flipCardContainerLeft")
			})
		}
  };

  return (
    <div className="aboutWrapper">
      <img className="backgrounds" src={Picture} alt="" />
      <div className={containerClass}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className="frontCard">
            <button className="frontFlipButton" onClick={handleClick}>
              Personal Interests
            </button>
            This is the front of the ReactCardFlip
          </div>
          <div className="backCard">
            This is the back of the ReactCardFlip
            <button className="backFlipButton" onClick={handleClick}>
              Code Interests
            </button>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}
