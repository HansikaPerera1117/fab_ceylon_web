import React, { useEffect } from "react";
import topImage from "../assets/topImage02.jpg";
import { Button, Col, Row } from "reactstrap";
import BannerCarousel from "../components/BannerCarousel";
import logo from "../assets/Logo/fabCeylonLogo01.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
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
          height: "750px",
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
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            margin: 0,
            fontSize: 60,
          }}
          className="text-center font-weight-semi-bold"
        data-aos="zoom-in-up"
          data-aos-delay="800"
        >
          Welcome to Fab Ceylon
        </h1>
      </div>

      <div className="w-100 mx-0  my-5" style={{ padding: "0 30px" }}>
        <Row className="w-100 p-0 mx-0 my-5 text-center text-md-start">
          <h3 className="mb-2" data-aos="fade-up">
            {" "}
            Download Fab Ceylon Mobile App
          </h3>
          <p className="mb-4" data-aos="fade-up">
            Stay connected with Fab Ceylon wherever you are! Our mobile app
            brings the full Fab Ceylon shopping experience to your fingertips,
            allowing you to browse, shop, and enjoy exclusive offers with just a
            tap. Whether you're looking for the latest products, tracking your
            orders, or exploring special deals, our app makes it easier than
            ever.
          </p>
          <h6 className="m-0" data-aos="fade-up">
            Available on
          </h6>

          <Row className="w-100 my-2" data-aos="fade-up" data-aos-delay="300">
            <Col sm={12} md={12} lg={6} className="pe-3 my-3">
              <div className=" d-flex flex-column flex-md-row  p-4 border border-secondary-subtle rounded-4">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  {" "}
                  <img
                    alt="logo"
                    src={logo}
                    style={{
                      height: 150,
                      width: "auto",
                    }}
                  />
                  <h4 className=" font-weight-semi-bold ">FAB CEYLON</h4>
                </div>
                <div className="ps-0 ps-md-5 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start">
                  <h3>Google Play Store</h3>
                  <h6>
                    Download the Fab Ceylon app on your Android device and enjoy
                    seamless access to our services at your fingertips.
                  </h6>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.rhotera.fabceylonapp2"
                    target="blank"
                  >
                    <Button className="px-5 mt-3" color="success">
                      Download
                    </Button>
                  </a>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} className="pe-3 my-3">
              <div className=" d-flex flex-column flex-md-row  p-4 border border-secondary-subtle rounded-4">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  {" "}
                  <img
                    alt="logo"
                    src={logo}
                    style={{
                      height: 150,
                      width: "auto",
                    }}
                  />
                  <h4 className=" font-weight-semi-bold ">FAB CEYLON</h4>
                </div>
                <div className="ps-0 ps-md-5 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start">
                  <h3>Apple App Store</h3>
                  <h6>
                    Download the Fab Ceylon app on your iPhone or iPad and enjoy
                    seamless access to our services at your fingertips.
                  </h6>
                  <a
                    href="https://apps.apple.com/us/app/fab-ceylon/id6738855538"
                    target="blank"
                  >
                    <Button className="px-5 mt-3" color="success">
                      Download
                    </Button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Row>

        <Row className="m-0  p-0 text-center text-md-start">
          <h3 className="mb-2" data-aos="fade-up">
            Fab Ceylon Deals & Best-Sellers
          </h3>
          <p className="mb-4" data-aos="fade-up">
            Discover amazing deals and our top-selling products! Fab Ceylon
            offers a wide range of products at unbeatable prices, with fresh
            discounts and exclusive offers regularly updated. Whether you’re
            looking for the latest trends or classic favorites, we’ve got
            something for everyone.
          </p>
          <Row
            className="w-100 m-0"
            style={{ padding: "0 10px" }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <BannerCarousel />
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
