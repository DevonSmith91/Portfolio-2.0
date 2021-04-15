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
          <div className="frontCardWrapper">
            <button className="frontFlipButton" onClick={handleClick}>
              About My Life
            </button>
						<div className="languageBlock">Languages:</div>
						<div className="frameworkBlock">Frameworks:</div>
						<div className="databaseBlock">Databases:</div>
						<div className="applicationsBlock">Applications:</div>
            <div className="frontCard">
              <ul className="languageUl">
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Node</li>
							</ul>
							<ul className="frameworkUl">
								<li>React</li>
								<li>Express JS</li>
								<li>Vue JS</li>
							</ul>
						</div>
						<div className="frontInnerCard">
							<ul className="databaseUl">
								<li>MongoDB</li>
								<li>FireBase</li>
							</ul>
							<ul className="applicationsUl">
								<li>Visual Studio Code</li>
								<li>GitHub</li>
							</ul>
						</div>
          </div>
          <div className="backCardWrapper">
            <button className="backFlipButton" onClick={handleClick}>
              About My Work
            </button>
            <div className="backCard">
              This is the back of the ReactCardFlip
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}
