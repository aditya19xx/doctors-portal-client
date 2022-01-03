import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
  {
    name: "Flouride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe natus iusto numquam laudantium odit tenetur dolorem delectus eos nisi?",
      img: fluoride
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe natus iusto numquam laudantium odit tenetur dolorem delectus eos nisi?",
      img: cavity
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe natus iusto numquam laudantium odit tenetur dolorem delectus eos nisi?",
      img: whitening
  }
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {
              services.map(service => <Service
              key={services.name}
              service = {service}
              >
              </Service>)
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
