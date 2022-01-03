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
            <Item>
              <h2>Projects.</h2>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item>
              <Card class="projectCard">
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1641161780/Portfolio%20Images/Screen_Shot_2022-01-02_at_2.15.23_PM_hizu5u.png"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item>
              <Card class="projectCard">
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1641161780/Portfolio%20Images/Screen_Shot_2022-01-02_at_2.15.23_PM_hizu5u.png"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item>
              <Card class="projectCard">
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/adelaney923/image/upload/v1641161780/Portfolio%20Images/Screen_Shot_2022-01-02_at_2.15.23_PM_hizu5u.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProjectDisplay;
