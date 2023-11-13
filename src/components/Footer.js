import React from "react";
import Logo3 from "../assets/logo3.png";
import Insta from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import TicTok from "../assets/tiktoc.png";
import Facebook from "../assets/facebook.png";

const socialMediaLinks = [
    { name: "Instagram", icon: Insta, url: "https://www.instagram.com" },
    { name: "LinkedIn", icon: LinkedIn, url: "https://www.linkedin.com" },
    { name: "TikTok", icon: TicTok, url: "https://www.tiktok.com" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com" },
];

function Footer() {
    return (
        <div className="container mx-auto flex justify-between items-center mt-2 mb-5">
            <div className="flex text-ActivityPbackground1 font-semibold">
                <p className="mr-5">Politique de confidentialité</p>
                <p>Conditions générales</p>
            </div>
            <div className="flex justify-between items-center">
                {socialMediaLinks.map((socialMedia, index) => (
                    <a
                        key={index}
                        href={socialMedia.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={socialMedia.icon}
                            alt={socialMedia.name}
                            className="h-8 w-auto mr-5"
                        />
                    </a>
                ))}
            </div>
            <div>
                <img src={Logo3} alt="Logo" className="h-8 w-auto" />
            </div>
        </div>
    );
}

export default Footer;
