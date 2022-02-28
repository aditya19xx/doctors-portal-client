import React from "react";
import Box from "@mui/material/Box";
import img from "../../../images/treatment.png";

import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const Feature = () => {
  return (
    <Box>
      <Grid  sx={{marginTop:10}} container spacing={1}>
        <Grid item md={6} xs={12}>
          <img style={{ width: 400 }} src={img} />
        </Grid>
        <Grid sx={{ marginTop: 10}} item md={6} xs={12}>
            <Typography sx={{ marginTop:5,textAlign: 'left'}} variant="h3">
                Exceptional Dental 
                <br/>Care,on Your Terms
            </Typography>
          <Typography sx={{marginTop: 5, textAlign: 'left'}} variant="h6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-ore-less normal
            distribution of letters,as opposed to using Content here,content
            here,making it look like readable English. Many desktop publishing
            packages and web page
          </Typography>
          <Button sx={{marginTop: 10}} variant="contained">
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Feature;
