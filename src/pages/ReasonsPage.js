import React from "react";
import FeatureBox from "../components/FeatureBox";

const ReasonsPage = () => {
    return (
        <div className="mt-8 bg-ActivityPbackground1">
            <div className="container mx-auto items-center pt-16 pb-16 text-white font-semibold">
                <h1 className="text-center text-4xl">
                    Pourquoi nous choisir ?
                </h1>
            </div>

            {/* Top boxes */}
            <div className="flex container mx-auto justify-start">
                <FeatureBox
                    title="streaming"
                    subtitle="solution plus simple pour réussir votre"
                    description="Déployez rapidement votre contenu SVOD ou AVOD sur le Web, les appareils mobiles, et d'autres appareils connectés grâce à notre plateforme de 'end-to-end', soutenue par des ressources à l'échelle entreprise, une assistance dédiée, et des conseils de niveau professionnel."
                />
                <FeatureBox
                    title="Élargissez votre cible tout en réduisant votre budget"
                    description="Nous développons des applications pour tous les supports afin de diffuser toutes vos activités aux spectateurs. Avec PaieCash Play, votre solution de streaming est toujours en phase avec votre stratégie commerciale."
                />
            </div>

            {/* Bottom boxes */}
            <div className="flex container mx-auto justify-end mt-4 mb-8 pb-8">
                <FeatureBox
                    title="vidéo avec PaieCash Play"
                    subtitle="Monétiser votre contenu"
                    description="Paiement à la séance, abonnement, tickets de match. Les supporters veulent voir leurs équipes préférées où qu'ils soient. Les parents des jeunes joueurs veulent voir les matchs de leurs enfants, même s'ils ne peuvent pas faire le déplacement."
                />
                <FeatureBox
                    title="sponsors et autres annonceurs"
                    subtitle="Opportunités pour vos"
                    description="Opportunités pour vos sponsors et autres annonceurs. La publicité vidéo se développe rapidement et est appréciée par les grandes marques. Elle est également plus demandée que d'autres formes de marketing en ligne. Comme le portail vidéo est votre média, il est facile de promouvoir vos sponsors et partenaires."
                />
            </div>
        </div>
    );
};

export default ReasonsPage;
