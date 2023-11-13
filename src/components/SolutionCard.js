/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ChevronRightIcon } from "../assets/Icons";

const SolutionCard = ({ bgColor, title, subtitle, description }) => {
    return (
        <div
            className={`bg-${bgColor} text-white rounded w-1/3 h-80 mb-8 p-4 mr-24 relative`}
        >
           
            <div className="absolute top-4 right-4">
              
                <ChevronRightIcon />
             
            </div>

            <h1 className="text-l leading-tight mb-8 font-semibold">
                {title}{" "}
            </h1>

            <h1 className="text-xl leading-tight mb-8 font-semibold">
                {subtitle}
            </h1>
            <p className="text-base">{description}</p>
        </div>
    );
};

export default SolutionCard;
