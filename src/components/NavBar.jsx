import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../styles/NavBarStyles.scss";
import logo from "../assets/Logo/fabCeylonLogo01.png";

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const toggle = () => setIsOpen(!isOpen);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    // Set the initial state and add listener
    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar
        {...args}
        expand="lg"
        fixed="top"
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        style={{
          height: "100px",
          padding: "0 30px",
          background: scrolled ? "rgba(19, 19, 19, 0.77)" : "transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
          backdropFilter: scrolled ? "blur(8.2px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(8.2px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <NavbarBrand
          href="/"
          className="d-flex  flex-column flex-sm-row align-items-start align-items-sm-center "
        >
          <img
            alt="logo"
            src={logo}
            style={{
              height: 60,
              width: "auto",
            }}
          />
          <h4 className="ms-0 ms-sm-3 text-white font-weight-semi-bold ">
            FAB CEYLON
          </h4>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
          className={`navbarCollapse ${isMobile ? "scrolled" : ""}`}
        >
          <Nav className="me-auto navBar" navbar>
            {[
              { href: "/", label: "Home" },
              { href: "/aboutUs", label: "About Us" },
              { href: "/commerceDisclosure", label: "Commerce Disclosure" },
              { href: "/privacyPolicy", label: "Privacy Policy" },
              { href: "/tearmsOfService", label: "Terms & Conditions" },
              { href: "/contactUs", label: "Contact Us" },
            ].map((item) => (
              <NavItem key={item.href}>
                <NavLink
                  href={item.href}
                  className={`text-white nav-link ${
                    activeLink === item.href ? "active" : ""
                  }`}
                  onClick={() => setActiveLink(item.href)}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
