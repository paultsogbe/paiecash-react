import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PartnersPage = () => {
  return (
    <div className="mt-8 mb-8 bg-PartnersPbackground">
      <div className="container mx-auto items-center pt-8 pb-8 font-semibold">
        <h1 className="text-center text-4xl">Nos partenaires</h1>
      </div>
      <div className=" w-3/5 text-white text-9xl flex justify-around container mx-auto pb-8">
        <FontAwesomeIcon icon="envelope" />
        <FontAwesomeIcon icon="envelope" />
        <FontAwesomeIcon icon="envelope" />
        <FontAwesomeIcon icon="envelope" />
      </div>
    </div>
  );
};

export default PartnersPage;
