import React, { useEffect } from "react";
import topImage from "../assets/topImage06.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "reactstrap";

const PrivacyPolicyPage = () => {
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
          Privacy Policy
        </h1>
      </div>

      <div className="w-100 mx-0  my-5" style={{ padding: "0 30px" }}>
        <Row>
          <Col md={12}>
            <h1
              className="font-weight-semi-bold mb-3 primary-color"
              data-aos="fade-up"
            >
              Privacy Policy
            </h1>
            <p data-aos="fade-up">
              At Fab Ceylon, your privacy is of utmost importance to us. This
              Privacy Policy outlines how we collect, use, and protect your
              personal information when you interact with our website,
              restaurant services, and e-commerce platform. By accessing or
              using our services, you agree to the practices described in this
              policy.
            </p>
          </Col>
          <Col md={12}>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                Information We Collect
              </h4>
              <p className="ps-5" data-aos="fade-up">
                We collect information from you in several ways when you
                interact with our website and services:
              </p>
              <ol className="ps-5" data-aos="fade-up">
                <li>
                  Personal Information: This includes your name, email address,
                  phone number, shipping/billing address, and payment
                  information provided during the checkout process or account
                  registration.
                </li>
                <li>
                  Transactional Information: We collect details of the products
                  or services you purchase, including payment methods and
                  transaction history.
                </li>
                <li>
                  Usage Data: We may gather information about how you interact
                  with our website, such as IP addresses, browser type, pages
                  visited, and time spent on our site. This helps us improve our
                  services and enhance your browsing experience.
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                How We Use Your Information
              </h4>
              <p className="ps-5" data-aos="fade-up">
                We use the collected information for various purposes:
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  Processing Orders: To fulfill your purchase orders, process
                  payments, and arrange for delivery or reservations.
                </li>
                <li>
                  Communication: To send order confirmations, delivery updates,
                  marketing communications, and customer support messages. You
                  can opt out of promotional emails at any time.
                </li>
                <li>
                  Improving Our Services: To analyze usage data and enhance the
                  performance and features of our website and services.
                </li>
                <li>
                  Customer Support: To respond to inquiries, provide assistance,
                  and resolve any issues related to your orders or account.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                How We Protect Your Information
              </h4>
              <p className="ps-5" data-aos="fade-up">
                We take appropriate security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or
                destruction. These measures include:
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  Data Encryption: Sensitive information, such as payment
                  details, is encrypted during transmission using Secure Socket
                  Layer (SSL) technology.
                </li>
                <li>
                  Access Controls: Only authorized personnel have access to your
                  personal data for specific purposes such as processing orders
                  or customer support.
                </li>
                <li>
                  Regular Security Audits: Our systems are regularly monitored
                  and tested to ensure data protection.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                Sharing Your Information
              </h4>
              <p className="ps-5" data-aos="fade-up">
                We respect your privacy and will not share your personal
                information with third parties except in the following
                circumstances:
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  Service Providers: To trusted third-party vendors assisting us
                  in payment processing, delivery, or website maintenance.
                </li>
                <li>
                  Legal Requirements: If required by law, such as in response to
                  a subpoena, court order, or other legal processes.
                </li>
                <li>
                  Business Transfers: In case of a merger, acquisition, or sale,
                  your data may be transferred as part of the transaction.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                Cookies and Tracking Technologies
              </h4>
              <p className="ps-5" data-aos="fade-up">
                We use cookies and similar technologies to enhance your browsing
                experience and analyze website traffic. Cookies allow us to:
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  Recognize your preferences and actions when you return to our
                  site.
                </li>
                <li>Provide personalized content and recommendations.</li>
                <li>
                  Improve the performance and functionality of our website.
                </li>
              </ul>
              <p className="ps-5" data-aos="fade-up">
                You can control cookie preferences through your browser
                settings. However, disabling cookies may affect certain features
                of our site.
              </p>
            </div>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                Your Rights and Choices
              </h4>
              <p className="ps-5" data-aos="fade-up">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  Access and Update: Access and update your information through
                  your account settings or by contacting us.
                </li>
                <li>
                  Request Deletion: Request the deletion of your personal data,
                  subject to legal or contractual obligations.
                </li>
                <li>
                  Opt-Out: Opt out of marketing emails by clicking the
                  "unsubscribe" link in our communications or contacting us
                  directly.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                Children’s Privacy
              </h4>
              <p className="ps-5" data-aos="fade-up">
                Our services are not directed at children under the age of 13,
                and we do not knowingly collect personal information from them.
                If we become aware of such data collection, we will promptly
                delete it.
              </p>
            </div>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                Changes to This Privacy Policy
              </h4>
              <p className="ps-5" data-aos="fade-up">
                We may update this Privacy Policy periodically to reflect
                changes in our practices or legal obligations. Any updates will
                be posted on this page, and the effective date will be revised
                accordingly. We encourage you to review this policy regularly.
              </p>
            </div>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                Contact Us
              </h4>
              <p className="ps-5" data-aos="fade-up">
                If you have any questions or concerns about this Privacy Policy,
                please contact us:
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  Email:{" "}
                  <a href="mailto:Fabceylon@icloud.com" className="linkStyle">
                    Fabceylon@icloud.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:0489182021" className="linkStyle">
                    0489182021
                  </a>
                  ,{" "}
                  <a href="tel:09034543399" className="linkStyle">
                    09034543399
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
