import { Component } from "solid-js";
import { HeroSection } from "./heroSection";

import "./style/home.scss";

const Home: Component<{}> = () => {
    return (
        <main class="home">
            <HeroSection />
        </main>
    );
};

export { Home };
