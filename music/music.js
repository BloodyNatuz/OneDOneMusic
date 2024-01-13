import "../style/main.scss";
import bgAnim from "../scripts/components/bg-anim";
import navbar from "../scripts/layout/navbar";
import pageContent from "../scripts/pages/music-page";
import footer from "../scripts/layout/footer";

function loadScript(){
    bgAnim();
    navbar();
    pageContent();
    footer();
}

loadScript();