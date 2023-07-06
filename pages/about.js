import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        imgClass="bg-1"
      />

      <div className="about-area about-page pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/about/about1.jpg" alt="Image" />

                <div className="shape-1">
                  <img src="/img/about/about-shape-1.png" alt="Image" />
                </div>

                <div className="shape-2">
                  <img src="/img/about/about-shape-2.png" alt="Image" />
                </div>

                <div className="shape-3">
                  <img src="/img/about/about-shape-3.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About Us</span>
                <h2>We are trusted The Best Certificate Healthcare</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Scientific skills for getting a better result
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>A good environment for work
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Professional doctors
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Digital laboratory
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Emergency services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/about-two/about-two1.png" alt="Image" />

                <div className="shape-1">
                  <img src="/img/about-two/about-two-shape2.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About Corona</span>
                <h2>How COV-19 Spreads</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <strong>
                  The best way to prevent illness is to avoid being exposed to
                  this virus.
                </strong>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Clean and disinfect frequently touched surfaces
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Avoid touching your eyes, nose, and mouth
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Clean your hands with a hand sanitizer
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Cover coughs and sneezes
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Stay home if you’re sick
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Wear a facemask if sick
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Cover your mouth and nose
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DoctorsStyleOne />

      <div className="about-area four abouts-six">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content ml-auto">
                <span className="top-title">About Us</span>
                <h2>Free Medical Camp Importance & Objectives</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Registration of Deserving Cases for Surgeries
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Hepatitis B & C Screening Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Consultation & Medicine
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Blood Pressure Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Diabetes Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Childbirth
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="about-img about-img-2"></div>
            </div>
          </div>
        </div>
      </div>

      <FunFactStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
};

export default About;
