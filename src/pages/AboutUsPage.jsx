import React, { useEffect } from "react";
import topImage from "../assets/topImage05.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsPage = () => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${topImage})`,
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
          About Us
        </h1>
      </div>

      <div className="w-100 mx-0  my-5" style={{ padding: "0 30px" }}></div>
    </div>
  );
};

export default AboutUsPage;
