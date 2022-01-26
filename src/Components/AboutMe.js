import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const AboutMe = () => {
  return (
    <div id="aboutPage">
      <Box sx={{ flexGrow: 1, border: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p className="headers">About Me.</p>
          </Grid>
          <Grid item xs={12}>
            {/* <Item> */}
            <div class="aboutContainer">
              <div class="about-content">
                <img
                  alt="profilepic"
                  class="about-me-image"
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1634061287/Portfolio%20Images/IMG_1511_Facetune_10-10-2021-19-50-05_ddomkt.jpg"
                />
                <p class="about-me-text" className="otherText">
                  Hello! I am a full-stack software engineer passionate about
                  creating clean and efficient websites. With a background in
                  Biochemistry and Education, I have always been excited by
                  problem solving. After learning some basic coding through a
                  JavaScript library, I was instantly hooked. As someone who
                  loves to learn new things, I quickly realized that I could
                  never become bored with developing as there is always a new
                  language or framework to learn.
                </p>
              </div>
              {/* </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item> */}
              <div class="skills">
                <h3 id="skills-page">
                  <span class="sub-header">Skills.</span>
                </h3>
                <div class="skills-icons">
                  <div class="css">
                    <i class="fab skill fa-css3-alt"></i>
                    <p>CSS</p>
                  </div>
                  <div class="html">
                    <i class="fab skill fa-html5"></i>
                    <p>HTML5</p>
                  </div>
                  <div class="js">
                    <i class="fab skill fa-js-square"></i>
                    <p>JS</p>
                  </div>
                  <div class="react">
                    <i class="fab skill fa-react"></i>
                    <p>React</p>
                  </div>
                  <div class="nodejs">
                    <i class="fab skill fa-node-js"></i>
                    <p>Node.js</p>
                  </div>
                  <div class="python">
                    <i class="fab skill fa-python"></i>
                    <p>Python</p>
                  </div>
                  <div class="git">
                    <i class="skill fa-brands fa-git"></i>
                    <p>git</p>
                  </div>
                </div>
              </div>
            </div>
            {/* </Item> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AboutMe
