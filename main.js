import "./style/main.scss";
import favicon from "./scripts/config/favicon";
import bgAnim from "./scripts/components/bg-anim";
import navbar from "./scripts/layout/navbar";
import pageContent from "./scripts/pages/landing";
import footer from "./scripts/layout/footer";

function loadScript(){
    favicon();
    bgAnim();
    navbar();
    pageContent();
    footer();
}

loadScript();