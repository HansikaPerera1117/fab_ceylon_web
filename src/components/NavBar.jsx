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
  

  return (
    <div>
      <Navbar
        {...args}
        expand="md"
        fixed="top"
        style={{ height: "100px", padding: "0 30px" }}
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
          <h4 className="ms-0 ms-sm-3 text-white font-weight-semi-bold ">FAB CEYLON</h4>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto navBar" navbar>
            {[
              { href: "/", label: "Home" },
              { href: "/aboutUs", label: "About Us" },
              { href: "/commerceDisclosure", label: "Commerce Disclosure" },
              { href: "/privacyPolicy", label: "Privacy Policy" },
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
