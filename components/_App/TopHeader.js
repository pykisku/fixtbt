import React from "react";

const TopHeader = () => {
  return (
    <div className="top-header-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-9 col-sm-6">
            <ul className="header-content-left">
              <li>
                <i className="bx bx-time"></i>
                Mon-Fri 9am-5pm
              </li>
              <li>
                <a href="https://maps.google.com/?q=123 Fake Street">
                  <i className="bx bx-map"></i>
                  Visit Us: 123 Fake Street
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-3 col-sm-6">
            <ul>
              <li>
                <a href="tel:+822456974">
                  <i className="bx bx-phone-call"></i>
                  Call Us: +821-456-241
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

