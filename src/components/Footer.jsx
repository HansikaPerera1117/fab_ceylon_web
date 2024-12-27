import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Map, MapPin, Phone } from "react-feather";
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
            <Map /> 〒340-0022 Saitama, Sōka, Sezaki, 5 Chome−9−20 1F
          </p>
          <p data-aos="fade-up">
            <Phone /> 0489182021 / 09034543399 / 08098986244
          </p>
        </Col>

        <Col
          sm={12}
          md={6}
          lg={6}
          className="d-flex flex-column align-items-center align-items-md-end text-center text-md-end"
        >
          <p data-aos="fade-up">
            <a
              href="https://maps.app.goo.gl/JCMiTRxwsjo6DQrVA?g_st=com.google.maps.preview.coy"
              target="_blank"
              className="linkStyle"
            >
              <MapPin /> Ra Sakura International 合同会社 Location
            </a>
          </p>
          <p data-aos="fade-up">
            <a
              href="https://maps.app.goo.gl/wNdBbTd821UiK6rg9?g_st=com.google.maps.preview.copy "
              target="_blank"
              className="linkStyle"
            >
              <MapPin /> Fab Ceylon Restaurant & Spices Location
            </a>
          </p>
          <div className="mt-2" data-aos="fade-up">
            <Facebook className="me-3" />
            <Instagram className="me-3" />
          </div>
        </Col>
        <Col
          md={12}
          lg={12}
          className="text-center mt-2 mb-4"
          data-aos="fade-up"
        >
          <small> Copyright © {new Date().getFullYear()} Fab Ceylon</small>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
