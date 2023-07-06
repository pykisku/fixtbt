import React from "react";
import NavbarThree from "../components/_App/NavbarThree";
import MainBanner from "../components/HomeFive/MainBanner";
import SearchForm from "../components/HomeFive/SearchForm";
import Facilities from "../components/HomeFive/Facilities";
import AboutUs from "../components/HomeFive/AboutUs";
import SpecialistDoctors from "../components/HomeFive/SpecialistDoctors";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import NewsStyleOne from "../components/Common/NewsStyleOne";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import FunFactStyleThree from "../components/Common/FunFactStyleThree";

const Index5 = () => {
  return (
    <>
      <NavbarThree />

      <MainBanner />

      <SearchForm />

      <Facilities />

      <AboutUs />

      <SpecialistDoctors />

      <FunFactStyleThree />

      <DoctorsStyleOne />

      <Subscribe />

      <NewsStyleOne />
      
      <Footer />
    </>
  );
};

export default Index5;
