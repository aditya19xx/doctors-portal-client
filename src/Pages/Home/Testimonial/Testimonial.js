import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const Testimonial = () => {
  return (
    <Box sx={{mt:10, mb: 15}}>
      <Box sx={{ textAlign: "left", m: 1 }}>
        <Typography  style={{ color: "rgba(47, 207, 234)" }} variant="h6" gutterBottom component="div">
          TESTIMONIAL
        </Typography>
        <Typography sx={{mt:5}} variant="h3" gutterBottom component="div">
          What's Our Patients <br />
          Says
        </Typography>
      </Box>
      <Box sx={{mt:10}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  It is a long established fact that by the readable content of
                  a lot layout.The point of using Lorem a more-or-less normal
                  distribution to using Content here,cointent
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <img sx={{ width: 400 }} src={people1} />
                  <Box>
                    <h4 style={{ color: "rgba(47, 207, 234)" }}>
                      Winson Henry
                    </h4>
                    <h5 style={{ color: "gray" }}>California</h5>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  It is a long established fact that by the readable content of
                  a lot layout.The point of using Lorem a more-or-less normal
                  distribution to using Content here,cointent
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <img sx={{ width: 400 }} src={people2} />
                  <Box>
                    <h4 style={{ color: "rgba(47, 207, 234)" }}>
                      Winson Henry
                    </h4>
                    <h5 style={{ color: "gray" }}>California</h5>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  It is a long established fact that by the readable content of
                  a lot layout.The point of using Lorem a more-or-less normal
                  distribution to using Content here,cointent
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <img sx={{ width: 400 }} src={people3} />
                  <Box>
                    <h4 style={{ color: "rgba(47, 207, 234)" }}>
                      Winson Henry
                    </h4>
                    <h5 style={{ color: "gray" }}>California</h5>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonial;
