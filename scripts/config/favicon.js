import imgLogo from "../../img/odom-white.svg"

export default function favicon(){
    let head = document.querySelector("head");
    let linkFavicon = document.createElement("link");
    linkFavicon.rel = "icon";
    linkFavicon.type = "image/svg+xml";
    linkFavicon.href = imgLogo;
    head.appendChild(linkFavicon);
}