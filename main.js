import "./style/main.scss";
import "./scripts/components/bg-anim";
import navbar from "./scripts/layout/navbar";
import pageContent from "./scripts/pages/landing";
import footer from "./scripts/layout/footer";


function loadScript(){
    navbar();
    pageContent();
    footer();
}

loadScript();