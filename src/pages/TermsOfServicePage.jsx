import React, { useEffect } from "react";
import topImage from "../assets/topImage07.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "reactstrap";

const TermsOfServicePage = () => {
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
          Terms and Conditions
        </h1>
      </div>

      <div className="w-100 mx-0  my-5" style={{ padding: "0 30px" }}>
        <Row>
          <Col md={12}>
            <h1
              className="font-weight-semi-bold mb-3 primary-color"
              data-aos="fade-up"
            >
              Terms and Conditions
            </h1>
            <p data-aos="fade-up">
              Welcome to Fabceylononline! These Terms and Conditions ("Terms")
              govern your use of our website and the purchase of products from
              our online store. By accessing or using the website, you agree to
              be bound by these Terms. If you do not agree, please refrain from
              using the website.
            </p>
          </Col>
          <Col md={12}>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                General Information
              </h4>
              <p className="ps-5" data-aos="fade-up">
                Fabceylononline is a Japan-based e-commerce platform that allows
                customers to purchase a wide range of products. For any
                inquiries, you may contact our support team at
                <a
                  href="mailto:fabceylononline@gmail.com."
                  target="_blank"
                  className="linkStyle"
                >
                  {" "}
                  <u>fabceylononline@gmail.com.</u>
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                Eligibility
              </h4>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  You must be at least 18 years old or have the consent of a
                  legal guardian to make purchases.
                </li>
                <li>
                  By using our services, you confirm that the information
                  provided is accurate and current.
                </li>
              </ul>
            </div>
            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              Products and Services
            </h4>
            <ul className="ps-5" data-aos="fade-up">
              <li>
                We make every effort to display product details, descriptions,
                and pricing accurately.
              </li>
              <li>Product availability is subject to change without notice.</li>
              <li>
                We reserve the right to limit the quantities of any products or
                services offered.
              </li>
            </ul>
            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              Pricing and Payments
            </h4>
            <ul className="ps-5" data-aos="fade-up">
              <li>
                All prices are listed in [specify currency, e.g., JPY] and are
                subject to applicable taxes and shipping fees.
              </li>
              <li>
                Payment can be made through our secure online payment gateway.
                We accept major credit cards, debit cards, and other methods
                specified during checkout.
              </li>
              <li>
                Fabceylononline uses secure payment methods to protect your
                data. However, we are not liable for breaches caused by
                third-party payment processors.
              </li>
            </ul>
            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              Shipping and Delivery
            </h4>
            <ul className="ps-5" data-aos="fade-up">
              <li>
                Shipping times and costs will vary depending on the destination
                and the product.
              </li>
              <li>
                Fabceylononline is not responsible for delays caused by customs,
                shipping carriers, or unforeseen circumstances.
              </li>
              <li>
                Customers are responsible for providing accurate shipping
                information.
              </li>
            </ul>
            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              Returns and Refunds
            </h4>
            <ul className="ps-5" data-aos="fade-up">
              <li>
                Returns and refunds are subject to our [Return Policy].
                Customers must initiate a return request within [X days] of
                receiving the product.
              </li>
              <li>
                Products must be unused, in their original packaging, and
                accompanied by proof of purchase.
              </li>
              <li>
                Refunds will be issued through the original payment method.
              </li>
            </ul>
            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              User Accounts
            </h4>
            <ul className="ps-5" data-aos="fade-up">
              <li>
                Users are responsible for maintaining the confidentiality of
                their account credentials.
              </li>
              <li>
                Fabceylononline reserves the right to suspend or terminate
                accounts for unauthorized activities.
              </li>
            </ul>
            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              Intellectual Property
            </h4>
            <ul className="ps-5" data-aos="fade-up">
              <li>
                All content, including text, images, logos, and graphics on
                Fabceylononline, is owned by or licensed to us.
              </li>
              <li>
                Unauthorized use, reproduction, or distribution of our content
                is strictly prohibited.
              </li>
            </ul>
            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              Liability Disclaimer
            </h4>
            <ul className="ps-5" data-aos="fade-up">
              <li>
                Fabceylononline is not liable for any direct, indirect,
                incidental, or consequential damages arising from the use of our
                website or products.
              </li>
              <li>
                Our liability is limited to the maximum extent permitted by
                applicable law.
              </li>
            </ul>
            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              Privacy
            </h4>
            <ul className="ps-5" data-aos="fade-up">
              <li>
                Fabceylononline is committed to protecting your privacy. Please
                refer to our [Privacy Policy] for details on data collection and
                usage.
              </li>
            </ul>

            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              Governing Law
            </h4>
            <ul className="ps-5" data-aos="fade-up">
              <li>
                These Terms shall be governed by and construed in accordance
                with the laws of Japan. Any disputes will be resolved in the
                courts of [specify jurisdiction, e.g., Tokyo].
              </li>
            </ul>

            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              Changes to Terms
            </h4>
            <ul className="ps-5" data-aos="fade-up">
              <li>
                Fabceylononline reserves the right to update these Terms at any
                time. Changes will be effective upon posting.
              </li>
              <li>
                Continued use of the website constitutes acceptance of the
                updated Terms.
              </li>
            </ul>

            <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
              Contact Information
            </h4>
            <p className="ps-5" data-aos="fade-up">
              For any questions about these Terms, please contact us at:
            </p>
            <p className="ps-5" data-aos="fade-up">
              <strong>Fabceylononline</strong> <br />
              Email:{" "}
              <a
                href="mailto:fabceylononline@gmail.com"
                target="_blank"
                className="linkStyle"
              >
                <u>fabceylononline@gmail.com</u>
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
