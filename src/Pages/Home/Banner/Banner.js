import React from "react";
import Container from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";
import { Button, Typography, Box } from "@mui/material";

const bannerBg = {
  backgroundImage: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 500,
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box style={{marginLeft: 10}}>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              style={{
                color: "grey",
                fontSize: 14,
                fontWeight: 300,
                marginTop: 25,
              }}
              variant="h6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              laborum dicta ea error quaerat quam repudiandae unde, iure tenetur
              voluptates!
            </Typography>
            <Button sx={{ mt: 5 }} variant="contained">
            Get Appointment
          </Button>
          </Box>
         
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={6}>
          <img style={{ width: "500px" }} src={chair} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
