import React from 'react'
import '../App.css'

const LandingPage = () => {
    return (
    <div class='index-container'>
        {/* <img class ='index-image' src='https://res.cloudinary.com/adelaney923/image/upload/v1634233239/Portfolio%20Images/Screen_Shot_2021-10-14_at_10.39.11_AM_j45hbg.png' /> */}
        <div class='welcome-text'>
            <p><span class='intro-statement'>Alex Delaney.</span><br/><span class='intro-line'>Software Engineer.</span></p>
            <button class='landingBut'>About Me</button>
            <button class='landingBut'>Projects</button>
        </div>
    </div>
    )
}

export default LandingPage;
