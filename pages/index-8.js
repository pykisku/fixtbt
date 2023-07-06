import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import MainBanner from "../components/HomeEight/MainBanner";
import Facility from "../components/HomeEight/Facility";
import AboutUs from "../components/HomeEight/AboutUs";
import Department from "../components/HomeEight/Department";
import FunFactStyleThree from "../components/Common/FunFactStyleThree";
import OurServices from "../components/HomeEight/OurServices";
import DoctorsStyleFour from "../components/Common/DoctorsStyleFour";
import Pricing from "../components/HomeEight/Pricing";
import Faqs from "../components/Common/Faqs";
import AppointmentForm from "../components/HomeEight/AppointmentForm";
import TestimonialStyleOne from "../components/Common/TestimonialStyleOne";
import NewsStyleTwo from "../components/Common/NewsStyleTwo";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const Index8 = () => {
  return (
    <>
      <NavbarFour />

      <MainBanner />

      <Facility />

      <AboutUs />

      <Department />

      <FunFactStyleThree />

      <OurServices />

      <div className="bg-color">
        <DoctorsStyleFour />
      </div>

      <Pricing />

      <Faqs />

      <AppointmentForm />

      <TestimonialStyleOne />

      <NewsStyleTwo />

      <Subscribe />

      <Footer />
    </>
  );
};

export default Index8;
