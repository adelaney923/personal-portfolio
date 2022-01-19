import React from "react";
import { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import "../App.css";

const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../client_secret.json");
let doc = {};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [displayForm, setDisplayForm] = useState(true);

  const makeInitialCall = async () => {
    doc = new GoogleSpreadsheet("1kum9XDcIH6fOazMkODarC5kOYB9F9_VRWc6Y8_YKWac");
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    let dataRows = await doc.sheetsByIndex[0].getRows();
    console.log(doc.sheetsByIndex[0]);
    console.log(dataRows);
  };
  useEffect(() => {
    makeInitialCall();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Thanks!");
    setDisplayForm(!displayForm);
    let newRow = {
      Name: name,
      Email: email,
      Message: message,
    };

    let sheet = await doc.sheetsByIndex[0];
    sheet.addRow(newRow);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact">
      <div className="contactcontainer">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>Contact.</h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <p>
                Looking to take on new projects. Please fill out the form or
                message me directly on LinkedIn.
              </p>
              <a
                href="https://www.linkedin.com/in/adelaney923/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/adelaney923"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <p>Resume</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="formblock">
              {displayForm ? (
                <form>
                  <input
                    type="text"
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    onChange={handleEmailChange}
                    value={email}
                    placeholder="Email"
                  />
                  <textarea
                    type="text"
                    onChange={handleMessageChange}
                    value={message}
                    placeholder="What's on your mind?"
                  />
                  <button onClick={handleSubmit}>{buttonText}</button>
                </form>
              ) : (
                <p className="submitText">
                  <span className="thanks">Thank you!</span>
                  <br />I will be in contact soon.
                </p>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
