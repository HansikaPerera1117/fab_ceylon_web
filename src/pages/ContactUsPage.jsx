import React, { useEffect, useState } from "react";
import topImage from "../assets/topImage04.jpg";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

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
          Contact Us
        </h1>
      </div>

      <div className="w-100 mx-0  my-5" style={{ padding: "0 30px" }}>
        <Row className="d-flex flex-row flex-md-row-reverse ">
          <Col md={12} lg={5} className="text-center text-md-start">
            <h1
              className="primary-color font-weight-semi-bold mb-1"
              data-aos="fade-up"
            >
              Contact Us
            </h1>
            <h3 className="font-weight-semi-bold mb-2" data-aos="fade-up">
              We'd Love to Hear From You!
            </h3>
            <p data-aos="fade-up">
              At Fab Ceylon, we're eager to hear from our customers. Whether you
              have a question about Fab Ceylon, need help with reservations, or
              want to share feedback, we're here for you. Please fill out the
              form below, and a team member will get back to you as soon as
              possible.
            </p>
            <p data-aos="fade-up">
              Your feedback helps us improve and provide the best experience for
              you. Thank you for choosing Fab Ceylon, and we look forward to
              serving you again soon!
            </p>
          </Col>
          <Col md={12} lg={7}>
            <Form onSubmit={handleSubmit} data-aos="zoom-in-up">
              <Row>
                <Col sm={12} md={6}>
                  <FormGroup floating>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      type="text"
                      required
                    />
                    <Label for="firstName">First Name</Label>
                  </FormGroup>{" "}
                </Col>
                <Col sm={12} md={6}>
                  <FormGroup floating>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      type="text"
                      required
                    />
                    <Label for="lastName">Last Name</Label>
                  </FormGroup>{" "}
                </Col>
                <Col sm={12} md={12}>
                  <FormGroup floating>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                    <Label for="email">Email</Label>
                  </FormGroup>{" "}
                </Col>
                <Col sm={12} md={12}>
                  <FormGroup floating>
                    <Input
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      type="textarea"
                      style={{ height: 150 }}
                      required
                    />
                    <Label for="message">Message</Label>
                  </FormGroup>{" "}
                </Col>
                <Col sm={12} md={12} className="d-flex justify-content-end">
                  <Button color="success" className="px-5 py-2">
                    Send
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUsPage;
