import React from "react";
import PropTypes from "prop-types";
import "./headingStyle.css";
// import "./App.css";

function Heading(props) {
  return (
    <div className="headingContainer">
      <div className="para"> {props.title} </div>
      <div className="para"> {props.title} </div>
    </div>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

Heading.defaultPropTypes = {
  title: "Your Heading Text Here...",
};

export default Heading;
