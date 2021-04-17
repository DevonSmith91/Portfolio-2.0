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
              <div className="sportsBlock">Sports:</div>
              <div className="gamesBlock">Games:</div>
              <div className="hobbiesBlock">Hobbies:</div>
              <ul className="sportsUl">
                <li>Snowboarding</li>
                <li>Mountain Biking</li>
                <li>Soccer</li>
              </ul>
              <ul className="hobbiesUl">
                <li>Glass Blowing</li>
                <li>Art Projects</li>
                <li>Cooking</li>
              </ul>
              <div className="backInnerCard">
                <ul className="gamesUl">
                  <li>Divinity</li>
                  <li>Diablo 2</li>
                  <li>Borderlands</li>
                  <li>League of Legends</li>
                </ul>
              </div>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}
