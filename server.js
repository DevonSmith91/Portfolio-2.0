require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

const staticDir = process.env ? "./client/public" : "./client/build";
app.use(express.static(path.resolve(staticDir)));

// nodemailer
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

const transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.CONTACTUSER,
    pass: process.env.CONTACTPASS,
  },
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server is ready to take messages");
  }
});

app.post("/send", (req, res, next) => {
  console.log("this is the req", req.body);
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  let content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  let mail = {
    from: name,
    to: "devonsmith91@gmail.com",
    subject: "New Message from Portfolio",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/build/index.html"));
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
