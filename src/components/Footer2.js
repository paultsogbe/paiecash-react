import React from "react";
import Logo2 from "../assets/logo2.png";

const Footer2 = () => {
    return (
        <div className="mt-16 bg-Footer2background flex justify-around text-white">
            <div>
                <div className="pt-4">
                    <img src={Logo2} alt="Logo2" className="h-16 w-auto" />
                </div>
                <p className="pt-4 pb-8">Recevez toutes nos actualités</p>

                <textarea className="mb-8 text-xs align-middle pl-6 bg-Footer2background border border-white rounded-2xl p-2 mx-auto w-full h-1/6">
                    Email
                </textarea>
            </div>
            <div>
                <p className="text-yellow-500 font-semibold text-base pt-4 pb-4">
                    Produits
                </p>
                <p className="text-xs pb-2">Mobile POS</p>
                <p className="text-xs pb-2">Pinpad</p>
                <p className="text-xs pb-2">QR code</p>
                <p className="text-xs pb-2">Authentification biométrique</p>
                <p className="text-xs pb-2">Carte de physique</p>
                <p className="text-xs pb-2">Carte personnalisée</p>
                <p className="text-xs pb-6">Carte virtuelle</p>
            </div>

            <div>
                <p className="text-yellow-500 font-semibold text-base pt-4 pb-4 ">
                    Solutions
                </p>
                <p className="text-xs pb-2">E-commerce</p>
                <p className="text-xs pb-2">Digitalisation</p>
                <p className="text-xs pb-2">Web TV</p>
                <p className="text-xs pb-2">Use Cases</p>
                <p className="text-xs pb-2">Crypto</p>
            </div>

            <div>
                <p className="text-yellow-500 font-semibold text-base pt-4 pb-4">
                    Programmes
                </p>
                <p className="text-xs pb-2">Sports</p>
                <p className="text-xs pb-2">Numérique</p>
            </div>
            <div>
                <p className="text-yellow-500 font-semibold text-base pt-4 pb-4">
                    Aider
                </p>
                <p className="text-xs pb-2">Investir</p>
                <p className="text-xs pb-2">Tarifs</p>
                <p className="text-xs pb-2">Qui sommes nous ?</p>
                <p className="text-xs pb-2">FAQ</p>
                <p className="text-xs pb-2">Support</p>
            </div>
        </div>
    );
};

export default Footer2;
