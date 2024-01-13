import "./style/main.scss";
import bgAnim from "./scripts/components/bg-anim";
import navbar from "./scripts/layout/navbar";
import pageContent from "./scripts/pages/landing";
import footer from "./scripts/layout/footer";

import imgLogo from "./img/odom-white.svg"

function loadScript(){
    bgAnim();
    navbar();
    pageContent();
    footer();
}

loadScript();

// Favicon script
let head = document.querySelector("head");
let linkFavicon = document.createElement("link");
linkFavicon.rel = "icon";
linkFavicon.type = "image/svg+xml";
linkFavicon.href = imgLogo;
head.appendChild(linkFavicon);