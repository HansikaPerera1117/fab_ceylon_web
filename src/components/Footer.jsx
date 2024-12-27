import React, { useEffect, useState } from "react";
import { Facebook, Instagram, MapPin, Phone } from "react-feather";
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import logo from "../assets/Logo/fabCeylonLogo01.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="w-100" style={{ padding: "0 30px" }}>
      <Row>
        <Col
          sm={12}
          md={6}
          lg={6}
          className="d-flex flex-column align-items-center align-items-md-start"
        >
          <div
            className="d-flex flex-column flex-sm-row align-items-center mb-3"
            data-aos="fade-up"
          >
            {" "}
            <img
              alt="logo"
              src={logo}
              style={{
                height: 80,
                width: "auto",
              }}
            />
            <h4 className="ms-0 ms-sm-3 font-weight-semi-bold ">FAB CEYLON</h4>
          </div>

          <p data-aos="fade-up">
            <MapPin /> Address
          </p>
          <p data-aos="fade-up">
            <Phone /> Telephone
          </p>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          className="d-flex flex-column align-items-center align-items-md-end text-center text-md-end"
        >
          <Nav navbar>
            <NavItem>
              <NavLink href="/" data-aos="fade-up">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutUs" data-aos="fade-up">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/commerceDisclosure" data-aos="fade-up">
                Commerce Disclosure
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/privacyPolicy" data-aos="fade-up">
                Privacy Policy
              </NavLink>
            </NavItem>
          </Nav>
          <div className="mt-3" data-aos="fade-up">
            <Facebook className="me-3" />
            <Instagram className="me-3" />
          </div>
        </Col>
        <Col md={12} lg={12} className="text-center mt-2 mb-4" data-aos="fade-up">
          <small> Copyright © {new Date().getFullYear()} Fab Ceylon</small>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
