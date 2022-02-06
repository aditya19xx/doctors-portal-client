import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8.00 AM - 9.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "9.00 AM - 10.00 AM",
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5.00 PM - 6.30 PM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7.00 AM - 8.30 AM",
    space: 10,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "6.00 PM - 7.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "7.00 PM - 8.00 PM",
    space: 10,
  },
];

const AvailableAppointments = ({ date }) => {
  return (
    <Container>
        
      <Typography sx={{ color: 'info.main', fontWeight:600, mb:2 }} variant="h5">Available Appointments {date.toDateString()} </Typography>

      <Grid container spacing={2}>
        {
            bookings.map(booking => <Booking
            key={booking.id}
            booking={booking}
            >
            </Booking>)
        }
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
