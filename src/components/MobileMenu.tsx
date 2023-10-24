import React, { FC } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { DiscordLogo, TwitterLogo, GithubLogo } from "@phosphor-icons/react";

interface MobileMenuProps {
  visible: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ visible }) => {
  return (
    <div
      className={`${visible ? "mobile-container" : "mobile-container active"}`}
    >
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
      <div className="nav-socials">
        <span className="nav-socials-icon">
          <DiscordLogo size={30} color="white" />
        </span>
        <span className="nav-socials-icon">
          <TwitterLogo size={30} color="white" />
        </span>
        <span className="nav-socials-icon">
          <GithubLogo size={30} color="white" />
        </span>
      </div>
    </div>
  );
};

export default MobileMenu;
