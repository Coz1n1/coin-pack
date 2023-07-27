import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { DiscordLogo, TwitterLogo, GithubLogo } from "@phosphor-icons/react";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-company">
        <span className="nav-company-header">COINPACK</span>
      </div>
      <div className="nav-links-wrapper">
        <Link
          to="home"
          className="nav-container-element"
          spy={true}
          smooth={true}
          duration={700}
        >
          Home
        </Link>
        <Link
          to="community"
          className="nav-container-element"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          Join Community
        </Link>
        <Link
          to="market"
          className="nav-container-element"
          spy={true}
          smooth={true}
          offset={-80}
          duration={700}
        >
          Market
        </Link>
        <Link
          to="contact"
          className="nav-container-element"
          spy={true}
          smooth={true}
          offset={-150}
          duration={700}
        >
          Contact
        </Link>
      </div>
      <div className="nav-socials">
        <span className="nav-socials-icon">
          <DiscordLogo size={40} color="white" />
        </span>
        <span className="nav-socials-icon">
          <TwitterLogo size={40} color="white" />
        </span>
        <span className="nav-socials-icon">
          <GithubLogo size={40} color="white" />
        </span>
      </div>
    </div>
  );
};
