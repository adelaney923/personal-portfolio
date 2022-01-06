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
            <h2>Projects.</h2>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item className="projectItem">
              <div>
                <img
                  class="projectImg"
                  alt="easyVegan"
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1641253010/Portfolio%20Images/Screen_Shot_2022-01-03_at_3.36.21_PM_q9irtd.png"
                />
                <h5>easyVegan</h5>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button className="projectBut" variant="primary">
                  Live Site
                </Button>
                <Button className="projectBut" variant="primary">
                  Git
                </Button>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item className="projectItem">
              <div>
                <img
                  class="projectImg"
                  alt="TravelGram"
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1541253002/Portfolio%20Images/Screen_Shot_2022-01-03_at_3.35.39_PM_klkkpw.png"
                />
                <h5>TravelGram</h5>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button className="projectBut" variant="primary">
                  Live Site
                </Button>
                <Button className="projectBut" variant="primary">
                  Git
                </Button>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item className="projectItem">
              <div>
                <img
                  class="projectImg"
                  alt="LabList"
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1541253015/Portfolio%20Images/Screen_Shot_2022-01-03_at_3.35.54_PM_de5qv2.png"
                />
                <h5>LabList</h5>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button className="projectBut" variant="primary">
                  Live Site
                </Button>
                <Button className="projectBut" variant="primary">
                  Git
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
