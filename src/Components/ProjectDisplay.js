import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../App.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: 0,
}));
 

function ProjectDisplay() {

  return (
    <div id="projectPage">
      <Box sx={{ flexGrow: 1, border: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p className="headers">Projects.</p>
          </Grid>
          <Grid item xs={12} md={4} className="projectItem">
            <Item className="projectBox">
              <div>
                <img
                  class="projectImg"
                  alt="easyVegan"
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1641253010/Portfolio%20Images/Screen_Shot_2022-01-03_at_3.36.21_PM_q9irtd.png"
                />
                <h4>easyVegan</h4>
                <h6>REACT.js | RESTful APIs</h6>
                <p className="otherText">
                  Utilizing a few different Vegan APIs including recipes and
                  news, easyVegan is a perfect resource for the transition into
                  veganism. User can browse and search recipes, read the latest
                  vegan news stories, and even search for vegan friendly
                  eateries near them.
                </p>
                <Button className="projectBut" variant="primary">
                  <a
                    href="https://adelaney923.github.io/easy-vegan-react/#/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LiveSite
                  </a>
                </Button>
                <Button className="projectBut" variant="primary">
                  <a
                    href="https://github.com/adelaney923/easy-vegan-react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} className="projectItem">
            <Item className="projectBox">
              <div>
                <img
                  class="projectImg"
                  alt="TravelGram"
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1541253002/Portfolio%20Images/Screen_Shot_2022-01-03_at_3.35.39_PM_klkkpw.png"
                />
                <h4>TravelGram</h4>
                <h6>REACT.js | Node.js | Express | MongoDb</h6>
                <p className="otherText">
                  TravelGram creates a space for users to share everything
                  Travel to a social like platform. Users signup to make a
                  profile and then create post sharing a photo, location, etc.
                  V2 would include being able to follow other users.
                </p>
                <Button className="projectBut" variant="primary">
                  <a
                    href="https://adelaney923.github.io/travelgram-frontend/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LiveSite
                  </a>
                </Button>
                <Button className="projectBut" variant="primary">
                  <a
                    href="https://github.com/adelaney923/travelgram-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} className="projectItem">
            <Item className="projectBox">
              <div>
                <img
                  class="projectImg"
                  alt="LabList"
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1541253015/Portfolio%20Images/Screen_Shot_2022-01-03_at_3.35.54_PM_de5qv2.png"
                />
                <h4>LabList</h4>
                <h6>REACT.js | Node.js | Python | Django </h6>
                <p className="otherText">
                  LabList allows users to login and create their lab inventory.
                  Using a Django backend with React frontend, users have full
                  CRUD capability to update inventory.
                </p>
                <Button className="projectBut" variant="primary">
                  <a
                    href="https://adelaney923.github.io/labinventory-frontend/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LiveSite
                  </a>
                </Button>
                <Button className="projectBut" variant="primary">
                  <a
                    href="https://github.com/adelaney923/labinventory-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProjectDisplay;
