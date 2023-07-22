import React from "react";
import "./Footer.css";
import {
  CaretRight,
  DiscordLogo,
  GithubLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-section">
          <div className="footer-section-wrapper">
            <span className="footer-header">
              <CaretRight size={22} color="white" />
              COINPACK
            </span>
          </div>
        </div>
        <div className="footer-bottom-section">
          <span className="footer-element">Home</span>
          <span className="footer-element">FAQ</span>
          <span className="footer-element">Community</span>
          <span className="footer-element">About</span>
          <span className="footer-element">Contact</span>
        </div>
        <div className="footer-icons-display">
          <span className="footer-icon">
            <DiscordLogo size={28} color="white" />
          </span>
          <span className="footer-icon">
            <TwitterLogo size={28} color="white" />
          </span>
          <span className="footer-icon">
            <GithubLogo size={28} color="white" />
          </span>
        </div>
      </div>
    </div>
  );
};
