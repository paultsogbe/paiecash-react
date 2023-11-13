import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

// Pages
import MainPage from "./pages/MainPage";
import ActivityPage from "./pages/ActivityPage";
import ReasonsPage from "./pages/ReasonsPage";
import SolutionsPage from "./pages/SolutionsPage";
import PartnersPage from "./pages/PartnersPage";
import ScreensPage from "./pages/ScreensPage";

import CustomScreensImage from "./assets/creens.png";

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, faKey, faFacebook);

const App = () => {
    return (
        <div>
            <Header />
            <MainPage />
            <ActivityPage />
            <ReasonsPage />
            <SolutionsPage />

            <ScreensPage
                title="Accédez à tous les écrans sans compromettre le style"
                description="PaeiCash Play vous offre la rapidité des applications standard, que ce soit sur de grands ou de petits écrans,
        tout en vous offrant la flexibilité et la liberté nécessaires pour concevoir l'interface utilisateur de vos activités sportives."
                imageSrc={CustomScreensImage}
            />

            <PartnersPage />

            <Footer2 />
            <Footer />
        </div>
    );
};

export default App;
