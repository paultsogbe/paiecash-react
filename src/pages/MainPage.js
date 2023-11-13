

import React from "react";
import Background from "../assets/background.png";

const SectionHeader = ({ title }) => (
  <div className="mb-4 text-center">
    <p className="mb-1 font-semibold">{title}</p>
    <hr className="border-t-2 border-black w-12 mx-auto" />
  </div>
);

const SectionLinks = ({ links }) => (
  <div className="flex justify-around">
    {links.map((link, index) => (
      <React.Fragment key={index}>
        <p className="mr-4">{link}</p>
        {index < links.length - 1 && <p className="mr-4">|</p>}
      </React.Fragment>
    ))}
  </div>
);

const MainPage = () => {
  const mainContentHeader = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "80vh",
    width: "100%",
    margin: 0,
    padding: 0,
  };

  const footballLinks = ["Football", "Ligue 2", "National", "National 1", "National 2", "Amateur"];
  const internationalLinks = ["Europe", "Afrique", "Asie"];

  return (
    <>
      <div className="mt-8" style={mainContentHeader}></div>
      <div className="mt-8 container mx-auto flex justify-around">
        {/* Left side */}
        <div>
          <SectionHeader title="Football France" />
          <SectionLinks links={footballLinks} />
        </div>
        {/* Right side */}
        <div>
          <SectionHeader title="Football International" />
          <SectionLinks links={internationalLinks} />
        </div>
      </div>
      <hr className="border-t-2 border-grey mx-auto mt-8 shadow-2xl" />
    </>
  );
};

export default MainPage;

