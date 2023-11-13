import React from "react";
import Diagram from "../assets/diagram.png";

const ActivityPage = () => {
    return (
        <div className="container mx-auto flex mt-8">
            {/* Left side */}
            <div className="flex-grow mr-8">
                <h1 className="text-4xl font-semibold">
                    Développez vos activités sportives grâce à notre
                    <span className="text-ActivityPbackground1">
                        {" "}
                        solution OTT
                    </span>
                </h1>
                <p className="mt-4 text-lg">
                    La solution OTT PaieCash Play peut être utilisée aussi bien
                    par les professionnels du sport que par les amateurs. Notre
                    ensemble d'outils web offre une gamme complète de
                    fonctionnalités pour les clubs, notamment l'ajout de jeux,
                    la diffusion en direct, la monétisation des événements, la
                    collecte de fonds pour le club, la gestion des
                    enregistrements et des utilisateurs. PaieCash Play permet
                    également d'effectuer des analyses vidéo en temps réel pour
                    faciliter la diffusion et la gestion des matchs officiels.
                    De plus, notre service PaieCash Play peut être intégré aux
                    plateformes de gestion des matchs via des API
                </p>
                <button className="bg-Footer2background text-white px-4 py-4 rounded font-semibold mt-8">
                    Demande une démo
                </button>
            </div>
            {/* Right side */}
            <div className="flex-shrink-0 w-1/2">
                <img src={Diagram} alt="Diagram" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default ActivityPage;
