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
            <h1 className="font-weight-semi-bold mb-3" data-aos="zoom-in-up">
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
                    <u> Fabceylon@icloud.com</u>
                  </a>{" "}
                </p>
                <h6 className="font-weight-medium" data-aos="fade-up">
                  Head of Operations :{" "}
                </h6>
                <p className="ps-5" data-aos="fade-up">
                  Our operations are led by a dedicated team of professionals
                  with a passion for excellence. The Head of Operations at Fab
                  Ceylon ensures seamless coordination between our restaurant
                  services and e-commerce platform. Their focus is on delivering
                  superior customer satisfaction, maintaining product quality,
                  and driving sustainable initiatives. For inquiries or
                  operational matters, please reach out to our support team.
                </p>
              </div>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                TERMS & FEES
              </h4>
              <p className="ps-5" data-aos="fade-up">
                All prices are inclusive of taxes unless specified otherwise.
                Additional fees such as delivery charges, service fees, or
                packaging costs will be displayed at checkout.
              </p>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Additional fees
              </h4>
              <p className="ps-5" data-aos="fade-up">
                Additional fees may apply for certain services or products.
                These include, but are not limited to:
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  Delivery charges, which vary based on the location and order
                  size.
                </li>
                <li>Packaging fees for specialty items or bulk orders.</li>
                <li>Customs or import duties for international shipments.</li>
                <li>
                  Service charges for special requests, including expedited
                  delivery or personalized orders.
                </li>
                <li>
                  <strong>Shipping Costs:</strong> ¥100 per box
                </li>
                <li>
                  <strong>Transaction Fees for Konbini Payments:</strong> ¥100
                </li>
              </ul>
              <p className="ps-5" data-aos="fade-up">
                All additional fees will be clearly displayed during the
                checkout process to ensure transparency.
              </p>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Exchanges & Returns Policy
              </h4>
              <p className="ps-5" data-aos="fade-up">
                We take pride in the quality of our products. If you encounter
                any issues, you may request an exchange or refund within 7 days
                of purchase. Please contact our support team for assistance.
              </p>
              <p className="ps-5" data-aos="fade-up">
                <strong>Returns and Exchanges Requested by Customers:</strong>
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  Items before shipping: You can cancel your order by pressing
                  the cancel button on the website.
                </li>
                <li>
                  Items after shipping: Unopened items can be refunded or
                  exchanged for items of equal or lesser value only if you
                  contact the customer support center (03-1234-5678) within 10
                  days of the arrival of the item. We do not accept returns or
                  exchanges of items after opening.
                </li>
              </ul>
              <p className="ps-5" data-aos="fade-up">
                <strong>
                  Returns and Exchanges for Defective Goods and Services:
                </strong>
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  Please contact the customer support center (03-1234-5678). We
                  will refund or exchange with new products at our shipping
                  cost.
                </li>
              </ul>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Delivery times
              </h4>
              <p className="ps-5" data-aos="fade-up">
                Delivery times vary based on the order type and location. Local
                orders are typically delivered within 1-2 hours, while
                e-commerce shipments may take 3-5 business days.
              </p>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Accepted payment methods
              </h4>
              <p className="ps-5" data-aos="fade-up">
                We accept the following payment methods: Credit/Debit cards,
                PayPal, Bank Transfers, and Cash on Delivery (for selected
                locations).
              </p>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Payment period
              </h4>
              <p className="ps-5" data-aos="fade-up">
                Payments for all orders must be completed within the following
                timeframes:
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  For online orders: Payment is required at the time of
                  checkout.
                </li>
                <li>
                  For reservations or pre-orders: A deposit or full payment may
                  be required at least 48 hours in advance, depending on the
                  service or event.
                </li>
                <li>
                  For custom or bulk orders: Payment terms will be agreed upon
                  during the order confirmation process.
                </li>
              </ul>
              <p className="ps-5" data-aos="fade-up">
                Failure to complete payment within the specified period may
                result in order cancellation.
              </p>
              <h4
                className="primary-color font-weight-semi-bold my-4"
                data-aos="fade-up"
              >
                Price
              </h4>
              <p className="ps-5" data-aos="fade-up">
                Fab Ceylon is committed to offering competitive prices for all
                our products and services. All prices listed on our platform are
                inclusive of applicable taxes unless stated otherwise.
              </p>
              <ul className="ps-5" data-aos="fade-up">
                <li>Sales Price: ¥4,000 (including consumption tax)</li>
                <li>Amounts listed on each product page</li>
                <li>
                  Prices for menu items and e-commerce products are displayed
                  clearly on their respective pages.
                </li>
                <li>
                  Seasonal promotions and discounts may be applied automatically
                  at checkout.
                </li>
                <li>
                  For bulk orders or catering services, customized pricing will
                  be provided based on your specific requirements.
                </li>
              </ul>
              <p className="ps-5" data-aos="fade-up">
                Fab Ceylon reserves the right to adjust prices without prior
                notice due to market conditions, seasonal availability, or other
                unforeseen factors.
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <h4 className="font-weight-semi-bold my-4" data-aos="fade-up">
                For Konbini payments users
              </h4>
              <p className="ps-5" data-aos="fade-up">
                Fab Ceylon complies with the requirements for accepting Konbini
                payments, ensuring our platform is accessible and meets customer
                needs.
              </p>
              <h5 className="ps-5 my-3" data-aos="fade-up">
                Key Compliance Information:
              </h5>
              <ul className="ps-5" data-aos="fade-up">
                <li>
                  The Fab Ceylon website is accessible in the Japanese language
                  to cater to our Japanese customers.
                </li>
                <li>
                  Support Phone Numbers provided are landline or IP-based (050)
                  numbers, ensuring reliable communication. Mobile numbers are
                  not used.
                </li>
                <li>
                  Support operating hours are clearly listed under contact
                  information (TEL & Mail) for customer convenience.
                </li>
                <li>
                  If the business is operated as a sole proprietorship, the
                  business owner's name is listed at the top of this page,
                  followed by the business name.
                </li>
              </ul>
              <p className="ps-5" data-aos="fade-up">
                Fab Ceylon is committed to adhering to the standards required
                for Konbini payments to offer seamless and reliable services.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CommerceDisclosurePage;
