import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: ` url(${bg})`,
  marginTop: 175,
  backgroundColor: "rgba(91, 113, 128, 0.9 )",
  backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: 400, marginTop: "-110px" }} src={doctor} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: 'center',
            textAlign:'left'
          }}
        >
          <Box>
            <Typography style={{ color: "rgba(47, 207, 234)" }} variant="h6">
              Appointment
            </Typography>
            <Typography style={{ color: "white", marginTop:25 }} variant="h4">
              Make an Appointment Today
            </Typography>
            <Typography style={{ color: "white", fontSize: 14, marginTop:25, }} variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              dolore mollitia nesciunt soluta dolorem minima cupiditate
              inventore debitis libero fuga.
            </Typography>
            <Button sx={{ mt:5 }} variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
