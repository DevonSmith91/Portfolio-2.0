import React, { useState, useEffect } from "react";
import Picture from "../Images/pc-two.jpg";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputState, setInputState] = useState("inputWrapper loading");

  const textInput = (e) => {
    if (e.target.id === "nameForm") {
      setName(e.target.value);
    } else if (e.target.id === "emailForm") {
      setEmail(e.target.value);
    } else if (e.target.id === "messageForm") {
      setMessage(e.target.value);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (inputState === "inputWrapper loading") {
        setInputState("inputWrapper");
      }
    }, 100);
  });

  const submitHandler = (event) => {
    event.preventDefault();
    let dataObj = {
      name: name,
      email: email,
      message: message,
    };

    fetch("/send", {
      method: "POST",
      body: JSON.stringify(dataObj),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          console.log("message sent");
          props.setMsgStatus("Success");
        } else if (response.status === "fail") {
          console.log(response);
					props.setMsgStatus("Failure");
        }
			})
			.catch(error => console.log(error.message))
		}

  let pageContent;
  if (props.msgStatus === "") {
    pageContent = (
      <div id="inputContainer">
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
    );
  } else if (props.msgStatus === "Success") {
    pageContent = (
      <div id="inputContainer">
        <h2>Your message has been successfully submitted</h2>
      </div>
    );
  } else if (props.msgStatus === "Failure") {
    pageContent = (
      <div id="inputContainer">
        <h2>
          There seems to have been an error, <br />
          please send an email over to DevonSmith91@Gmail.com with any comments
          or questions
        </h2>
      </div>
    );
  }

  return (
    <div className="contactWrapper">
      <img className="backgrounds" src={Picture} alt="" />
      <div className={inputState}>{pageContent}</div>
    </div>
  );
}
