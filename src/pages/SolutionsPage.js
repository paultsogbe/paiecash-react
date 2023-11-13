

import React from "react";
import SolutionCard from "../components/SolutionCard";



const SolutionsPage = () => {
    return (
        <div className="w-4/5 mr-60 ml-40 mt-16 p-4 shadow-xl">
            <h1 className="text-center text-4xl font-semibold pb-8">
                Nos solutions répondent à tous vos besoins
            </h1>
            <div className="flex justify-center">
                <SolutionCard
                    bgColor="Footer2background"
                    title="Vous voulez le plus rapide?"
                    subtitle="PaeiCash Play Basic"
                    description="Notre solution Basic répond à vos besoins en matière de diffusion de contenu vidéo rapide, afin d'obtenir des résultats efficaces pour votre stratégie marketing."
                />

                <SolutionCard
                    bgColor="ActivityPbackground1"
                    title="Vous voulez le unique?"
                    subtitle="PaeiCash Play Platinium"
                    description="La solution Platinum vous permet non seulement de diffuser rapidement et efficacement votre contenu vidéo, mais aussi de créer votre propre interface unique grâce à notre système de gestion de l'expérience utilisateur (UX)."
                />
            </div>
        </div>
    );
};

export default SolutionsPage;


