import React, { useEffect } from "react";
import topImage from "../assets/topImage03.jpg";
import { Col, Row } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const CommerceDisclosurePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${topImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-in"
      >
        <h1
          style={{
            position: "absolute",
            color: "white",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            margin: 0,
            fontSize: 60,
          }}
          className="text-center font-weight-semi-bold"
          data-aos="zoom-in-up"
          data-aos-delay="800"
        >
          Commerce Disclosure
        </h1>
      </div>

      <div className="w-100 mx-0  my-5" style={{ padding: "0 30px" }}>
        <Row>
          <Col md={4}>
            <h1
              className="font-weight-semi-bold mb-3"
              data-aos="zoom-in-up"
              data-aos-delay="900"
            >
              Commerce Disclosure
            </h1>
            <p data-aos="zoom-in-up">
              This page is the commerce disclosure for the consulting services
              provided by RA SAKURA INTERNATIONAL to customers based in Japan.
            </p>
          </Col>
          <Col md={8}>
            <div className="px-5">
              <h4
                className="primary-color font-weight-semi-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                Company Info & Contact
              </h4>
              <div>
                <h6 className="font-weight-medium" data-aos="fade-up">
                  Main Company legal name :{" "}
                </h6>
                <p className="ps-5" data-aos="fade-up">
                  RA SAKURA INTERNATIONAL合同会社
                </p>
                <h6 className="font-weight-medium" data-aos="fade-up">
                  Sub Company legal name :{" "}
                </h6>
                <p className="ps-5" data-aos="fade-up">
                  FAB CEYLON RESTAURANT & SPICES
                </p>
                <h6 className="font-weight-medium" data-aos="fade-up">
                  Main Company Location :{" "}
                </h6>
                <p className="ps-5" data-aos="fade-up">
                  <a
                    href="https://maps.app.goo.gl/JCMiTRxwsjo6DQrVA?g_st=com.google.maps.preview.coy"
                    target="_blank"
                    className="linkStyle"
                  >
                    RA SAKURA INTERNATIONAL合同会社 Location url
                  </a>
                </p>
                <h6 className="font-weight-medium" data-aos="fade-up">
                  Sub Company Location :{" "}
                </h6>
                <p className="ps-5" data-aos="fade-up">
                  <a
                    href="https://maps.app.goo.gl/wNdBbTd821UiK6rg9?g_st=com.google.maps.preview.copy "
                    target="_blank"
                    className="linkStyle"
                  >
                    FAB CEYLON RESTAURANT & SPICES Location url
                  </a>
                </p>
                <h6 className="font-weight-medium" data-aos="fade-up">
                  Address :{" "}
                </h6>
                <p className="ps-5" data-aos="fade-up">
                  English - 〒340-0022 Saitama, Sōka, Sezaki, 5 Chome−9−20 1F
                </p>
                <p className="ps-5" data-aos="fade-up">
                  Japan:- 〒340-0022 埼玉県草加市瀬崎５丁目９−20 1F
                </p>
                <h6 className="font-weight-medium" data-aos="fade-up">
                  Phone Number :{" "}
                </h6>
                <p className="ps-5" data-aos="fade-up">
                  <a href="tel:0489182021" className="linkStyle">
                    0489182021
                  </a>{" "}
                </p>
                <p className="ps-5" data-aos="fade-up">
                  <a href="tel:09034543399" className="linkStyle">
                    09034543399
                  </a>{" "}
                </p>
                <p className="ps-5" data-aos="fade-up">
                  <a href="tel:08098986244" className="linkStyle">
                    08098986244
                  </a>{" "}
                </p>

                <h6 className="font-weight-medium" data-aos="fade-up">
                  Email address :{" "}
                </h6>
                <p className="ps-5" data-aos="fade-up">
                  <a href="mailto:Fabceylon@icloud.com" className="linkStyle">
                    Fabceylon@icloud.com
                  </a>{" "}
                </p>
                <h6 className="font-weight-medium" data-aos="fade-up">
                  Head of Operations :{" "}
                </h6>
                <p className="ps-5" data-aos="fade-up">
                  Company legal name{" "}
                </p>
              </div>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                TERMS & FEES
              </h4>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Additional fees
              </h4>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Exchanges & Returns Policy
              </h4>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Delivery times
              </h4>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Accepted payment methods
              </h4>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Payment period
              </h4>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Price
              </h4>
            </div>
          </Col>
          <Col md={12}>
            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              For Checkout or Payment Links users
            </h4>
            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              For Konbini payments users
            </h4>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CommerceDisclosurePage;
