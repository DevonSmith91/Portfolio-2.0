import React, {useState, useEffect} from 'react'
import Picture from '../Images/pc-four.jpg'
import Me from '../Images/Me.jpg'

export default function Home() {

	const [loadName, setLoadName] = useState("nameWrapper nameLoading")
	const [loadTitle, setLoadTitle] = useState("titleWrapper titleLoading")
	const [loadHead, setLoadHead] = useState("headShotWrapper headShotLoading")

	useEffect(() => {
		setTimeout(() => {
					if (
            loadName === "nameWrapper nameLoading" &&
            loadTitle === "titleWrapper titleLoading" &&
            loadHead === "headShotWrapper headShotLoading"
          ) {
            console.log("Name class changed");
            setLoadName("nameWrapper");
						console.log("title class changed");
						setLoadTitle("titleWrapper");
						console.log("picture class changed");
						setLoadHead("headShotWrapper");
          }
		}, 100)
	})

	return (
    <div className="homeWrapper">
      <img className="backgrounds" src={Picture} alt="" />
			<div className="homeContent">
				<div className={loadName}>
					<h1>Devon Smith</h1>
				</div>
				<div className={loadTitle}>
					<ul>
						<li>Web Developer</li>
						<li>Artist</li>
						<li>Gamer</li>
					</ul>
				</div>
        <div className={loadHead}>
          <img src={Me} alt="Devon headshot" className="headShot" />
        </div>
      </div>
    </div>
  );
}
