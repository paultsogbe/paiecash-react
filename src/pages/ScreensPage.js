


import React from "react";
import PropTypes from "prop-types";

const ScreensPage = ({ title, description, imageSrc }) => {
  return (
    <div className="container mx-auto flex mt-8 items-center  bg-ScreensPbackground ">
      {/* Left side */}
      <div className="flex-grow mr-8">
        <h1 className="text-4xl font-semibold ">{title}</h1>
        <p className="mt-8 text-lg leading-tight">{description}</p>
      </div>
      {/* Right side */}
      <div className="flex-shrink-0 w-1/2">
        <img src={imageSrc} alt="Screens" className="w-full h-auto" />
      </div>
    </div>
  );
};

ScreensPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default ScreensPage;

