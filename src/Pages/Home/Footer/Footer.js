import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bg from "../../../images/footer-bg.png";

<script src="https://kit.fontawesome.com/a1e18d32c6.js" crossorigin="anonymous"></script>

const footerBg = {
    background: ` url(${bg})`,
    backgroundBlendMode: "darken, luminosity",
  };


const Footer = () => {
    return (
        <Box style={footerBg} sx={{ flexGrow: 1, mt:10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3}>
        <Typography style={{textAlign: 'left'}} variant="caption" display="block" gutterBottom>
        Emergency Dental Care <br/> Check Up <br/>
        Treatment of Personal Diseases <br/> Tooth Extraction <br/> Check Up
      </Typography>
        </Grid>
        <Grid item  xs={12} sm={12} md={3}>
        <Typography style={{textAlign: 'left', color: "rgba(47, 207, 234)"}} variant="h6" display="block" gutterBottom>
        Services
      </Typography>
      <Typography style={{textAlign: 'left'}} variant="caption" display="block" gutterBottom>
      Emergency Dental Care <br/> Check Up <br/>
        Treatment of Personal Diseases <br/> Tooth Extraction <br/> Check Up <br/> Check Up<br/> Check Up
      </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
        <Typography style={{textAlign: 'left', color: "rgba(47, 207, 234)"}} variant="h6" display="block" gutterBottom>
        Our Health
      </Typography>
      <Typography style={{textAlign: 'left'}} variant="caption" display="block" gutterBottom>
      Emergency Dental Care <br/> Check Up <br/>
        Treatment of Personal Diseases <br/> Tooth Extraction <br/> Check Up <br/> Check Up<br/> Check Up
      </Typography>
        </Grid>
        <Grid item  xs={12} sm={12} md={3}>
        <Typography style={{textAlign: 'left', color: "rgba(47, 207, 234)"}} variant="h6" display="block" gutterBottom>
        Our Address
      </Typography>
      <Typography style={{textAlign: 'left'}} variant="caption" display="block" gutterBottom>
      New York - 101010 Hudson <br/> Yards
      </Typography>
        </Grid>
         <Typography sx={{mx:"auto"}} variant="caption" display="block" gutterBottom>
      &copy; ADITYA DAS TURJA All Rights Reserved
      </Typography>
      </Grid>
     
    </Box>
    );
};

export default Footer;