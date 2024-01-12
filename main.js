import "./style/main.scss";
import "./scripts/components/bg-anim";
import "./scripts/layout/navbar";
import "./scripts/pages/landing";
import "./scripts/layout/footer";

let head = document.querySelector("head");
head.querySelectorAll('link[rel="modulepreload"]').removeAttribute("rel");