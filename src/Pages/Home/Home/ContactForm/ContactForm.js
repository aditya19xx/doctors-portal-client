import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import bg from "../../../../images/appointment-bg.png";
import { Button, Container } from '@mui/material';

const appointmentBanner = {
    background: ` url(${bg})`,
    backgroundColor: "rgba(91, 113, 128, 0.9 )",
    width: '700px',
    height: '400px',
    backgroundBlendMode: "darken, luminosity",
  };

const ContactForm = () => {
  return (
   <Container>
        <Box
    style={appointmentBanner}
      sx={{
        mx:'auto'
      }}
    >
      <Box >
      <h5 style={{ color: "rgba(47, 207, 234)" }}>CONTACT US</h5>
        <h2  style={{ color: "white" }}>Always Connect with us</h2>
      <form>
      <TextField sx={{mt:3}} fullWidth label="Email address" id="outlined-basic" variant="outlined" color="" />
      <TextField sx={{mt:3}} fullWidth label="Subject" id="outlined-basic" variant="outlined" />
      <TextField sx={{mt:3}} fullWidth label="Your message" id="outlined-basic" variant="outlined" />
      <Button sx={{m:2}} type="submit" variant="contained">Submit</Button>
      </form>
      </Box>
    </Box>
   </Container>
  );
};

export default ContactForm;
