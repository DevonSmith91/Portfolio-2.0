import React, { useState } from 'react'
import Picture from '../Images/pc-two.jpg'

export default function Contact() {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const textInput = (e) => {
		if (e.target.id === "nameForm") {
			setName(e.target.value)
		} else if (e.target.id === "emailForm") {
			setEmail(e.target.value)
		} else if (e.target.id === "messageForm") {
			setMessage(e.target.value)
		}
	}


	const submitHandler = (event) => {
		event.preventDefault()
		console.log("name", name)
		console.log("email", email)
		console.log("message", message)

		let dataObj = {
			name: name,
			email: email,
			message: message,
		}

		fetch("/send", {
			method: "POST",
			body: JSON.stringify(dataObj),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.status === "success") {
				console.log("message sent")
				} else if (response.status === "fail") {
					console.log("shit didn't work")
			}
		})
	}

	return (
    <div className="contactWrapper">
      <img className="backgrounds" src={Picture} alt="" />
      <div className="inputWrapper">
        <h2>Reach out any time!</h2>
        <form className="inputForm" action="POST" onSubmit={submitHandler}>
          <input
            id="nameForm"
            className="userInput"
            type="text"
            name="name"
            placeholder="Name"
            onChange={textInput}
          />
          <input
            id="emailForm"
            className="userInput"
            type="text"
            name="email"
            placeholder="Email"
            onChange={textInput}
          />
          <textarea
            id="messageForm"
            className="userInput"
            type="text"
            name="message"
            placeholder="Message"
            onChange={textInput}
          />
          <input className="submitInput" type="submit" />
        </form>
      </div>
    </div>
  );
}
