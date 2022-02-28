import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import ContactForm from './ContactForm/ContactForm';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Feature></Feature>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;