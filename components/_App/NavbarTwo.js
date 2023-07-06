import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";

const NavbarTwo = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top">
        <TopHeader />

        <div className="nav-area four">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <Link href="/" className="navbar-brand">
                    <img src="/img/logo-two.png" alt="logo" />
                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Home <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/"
                              className={`nav-link ${
                                currentPath == "/" && "active"
                              }`}
                            >
                              Home 1 (Emergency Medical Clinic)
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/index-2/"
                              className={`nav-link ${
                                currentPath == "/index-2/" && "active"
                              }`}
                            >
                              Home 2 (Covid-19 Treatment Clinic)
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/index-3/"
                              className={`nav-link ${
                                currentPath == "/index-3/" && "active"
                              }`}
                            >
                              Home 3 (Covid-19 Test Center)
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/index-4/"
                              className={`nav-link ${
                                currentPath == "/index-4/" && "active"
                              }`}
                            >
                              Home 4 (Vaccination Center/Clinic)
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/index-5/"
                              className={`nav-link ${
                                currentPath == "/index-5/" && "active"
                              }`}
                            >
                              Home 5 (Doctors Directory Listing)
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/index-6/"
                              className={`nav-link ${
                                currentPath == "/index-6/" && "active"
                              }`}
                            >
                              Home 6 (Health Charity Event)
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/index-7/"
                              className={`nav-link ${
                                currentPath == "/index-7/" && "active"
                              }`}
                            >
                              Home 7 (Medical Research)
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/index-8/"
                              className={`nav-link ${
                                currentPath == "/index-8/" && "active"
                              }`}
                            >
                              Home 8 (Dental Clinic)
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${
                            currentPath == "/about/" && "active"
                          }`}
                        >
                          About
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Pages <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/pricing/"
                              className={`nav-link ${
                                currentPath == "/pricing/" && "active"
                              }`}
                            >
                              Pricing
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/testimonials/"
                              className={`nav-link ${
                                currentPath == "/testimonials/" && "active"
                              }`}
                            >
                              Testimonials
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/doctors/"
                              className={`nav-link ${
                                currentPath == "/doctors/" && "active"
                              }`}
                            >
                              Doctors
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/appointment/"
                              className={`nav-link ${
                                currentPath == "/appointment/" && "active"
                              }`}
                            >
                              Appointment
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/faq/"
                              className={`nav-link ${
                                currentPath == "/faq/" && "active"
                              }`}
                            >
                              FAQs
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              className="nav-link"
                            >
                              User <i className="bx bx-plus"></i>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link
                                  href="/sign-in/"
                                  className={`nav-link ${
                                    currentPath == "/sign-in/" && "active"
                                  }`}
                                >
                                  Sign In
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/sign-up/"
                                  className={`nav-link ${
                                    currentPath == "/sign-up/" && "active"
                                  }`}
                                >
                                  Sign Up
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/recover-password/"
                                  className={`nav-link ${
                                    currentPath == "/recover-password/" &&
                                    "active"
                                  }`}
                                >
                                  Recover Password
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/coming-soon/"
                              className={`nav-link ${
                                currentPath == "/coming-soon/" && "active"
                              }`}
                            >
                              Coming Soon
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/terms-conditions/"
                              className={`nav-link ${
                                currentPath == "/terms-conditions/" && "active"
                              }`}
                            >
                              Terms & Conditions
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/privacy-policy/"
                              className={`nav-link ${
                                currentPath == "/privacy-policy/" && "active"
                              }`}
                            >
                              Privacy Policy
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/404"
                              className={`nav-link ${
                                currentPath == "/404/" && "active"
                              }`}
                            >
                              404 Error Page
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Services <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/services-1/"
                              className={`nav-link ${
                                currentPath == "/services-1/" && "active"
                              }`}
                            >
                              Services Style One
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-2/"
                              className={`nav-link ${
                                currentPath == "/services-2/" && "active"
                              }`}
                            >
                              Services Style Two
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-3/"
                              className={`nav-link ${
                                currentPath == "/services-3/" && "active"
                              }`}
                            >
                              Services Style Three
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Service Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Doctors <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/doctors-1/"
                              className={`nav-link ${
                                currentPath == "/doctors-1/" && "active"
                              }`}
                            >
                              Doctors Style One
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/doctors-2/"
                              className={`nav-link ${
                                currentPath == "/doctors-2/" && "active"
                              }`}
                            >
                              Doctors Style Two
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/doctors-3/"
                              className={`nav-link ${
                                currentPath == "/doctors-3/" && "active"
                              }`}
                            >
                              Doctors Style Three
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/doctor-details/"
                              className={`nav-link ${
                                currentPath == "/doctor-details/" && "active"
                              }`}
                            >
                              Doctors Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Blog <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/blog-grid/"
                              className={`nav-link ${
                                currentPath == "/blog-grid/" && "active"
                              }`}
                            >
                              Blog Grid
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-left-sidebar/"
                              className={`nav-link ${
                                currentPath == "/blog-left-sidebar/" && "active"
                              }`}
                            >
                              Blog Left Sidebar
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-right-sidebar/"
                              className={`nav-link ${
                                currentPath == "/blog-right-sidebar/" &&
                                "active"
                              }`}
                            >
                              Blog Right Sidebar
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-details/"
                              className={`nav-link ${
                                currentPath == "/blog-details/" && "active"
                              }`}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/contact/"
                          className={`nav-link ${
                            currentPath == "/contact/" && "active"
                          }`}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="others-option">
                    <div className="subscribe">
                      <Link href="/contact" className="default-btn">
                        Get A Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarTwo;
