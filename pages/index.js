import React from "react";
import Navbar from "../components/_App/NavbarFive";
import MainBanner from "../components/HomeSix/MainBanner";
import Facilities from "../components/HomeOne/Facility";
import AboutUs from "../components/HomeOne/AboutUs";
import Services from "../components/HomeOne/Services";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import OurWorks from "../components/HomeOne/OurWorks";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import AppointmentForm from "../components/HomeOne/AppointmentForm";
import EmergencyArea from "../components/HomeOne/EmergencyArea";
import TestimonialStyleOne from "../components/Common/TestimonialStyleOne";
import NewsStyleOne from "../components/Common/NewsStyleOne";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";


const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Facilities />

      <AboutUs />

      <Services />

      <DoctorsStyleOne />

      <OurWorks />

      <FunFactStyleOne />

      <AppointmentForm />

      <EmergencyArea />

      <TestimonialStyleOne />

      <NewsStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
};

export default Index;
