import React from 'react'
import {Button} from 'react-bootstrap'
import '../App.css'

const LandingPage = () => {
    return (
        <div id='landingPage'>
      <div class="index-container">
        {/* <img class ='index-image' src='https://res.cloudinary.com/adelaney923/image/upload/v1634233239/Portfolio%20Images/Screen_Shot_2021-10-14_at_10.39.11_AM_j45hbg.png' /> */}
        <div class="welcome-text">
          <h2>
            <span class="intro-statement">Alex Delaney.</span>
          </h2>
          <h3>
            <span class="intro-line">Software Engineer.</span>
          </h3>
          <Button className="landingBut" variant="primary">
            <a href="#aboutPage">About Me</a>
          </Button>
          <Button className="landingBut" variant="primary">
            <a href="#projectPage">Projects</a>
          </Button>
        </div>
      </div>
      </div>
    );
}

export default LandingPage;
