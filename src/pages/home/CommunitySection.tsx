import React from "react";

export const CommunitySection = () => {
  return (
    <div className="community-container">
      <div className="community-wrapper">
        <div className="community-top-section">
          <div className="community-top-header">
            <span className="community-header">Join us Via Discord</span>
          </div>
          <div className="community-top-wrapper">
            <div className="community-top-element">
              <span className="community-top-element-text">
                We provides all newest data about crypto
              </span>
              <span className="community-top-element-text">
                If you have any question write to our admins and they will
                surely answer you
              </span>
              <span className="community-top-element-text">
                In case when you want to invest something we have partnership
                with crypto advisers
              </span>
            </div>
            <div>
              <img
                src={require("../../assets/dc.png")}
                alt=""
                className="community-image-props"
              />
            </div>
            <div className="community-top-element">
              <span className="community-top-element-text">
                Find out latest news about currencies and other stuff on our
                discord
              </span>
              <span className="community-top-element-text">
                Every two weeks we are making free podcast about crypto for
                those who are the most interested
              </span>
              <span className="community-top-element-text">
                We have channels for every coin users
              </span>
            </div>
          </div>
        </div>
        <div className="community-bottom-section">
          <img
            src={require("../../assets/gollum.png")}
            alt=""
            className="community-bottom-image-props"
          />
          <div className="community-bottom-section-right">
            <span>Don't be shy and hit the button</span>
            <button className="community-button">Join Community</button>
          </div>
        </div>
      </div>
    </div>
  );
};
