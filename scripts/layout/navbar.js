// Sélection du body
let body = document.querySelector("body");

// Création et importation de la navbar
let navbar = document.createElement("navbar");
body.appendChild(navbar);

// Création et importation des nav-links
let firstNavLink = document.createElement("a");
firstNavLink.className = "nav-link";
firstNavLink.href = "/";
let imgLogo = document.createElement("img");
imgLogo.src =
  "/public/img/odom-white.svg";

let secondNavLink = document.createElement("a");
secondNavLink.className = "nav-link";
secondNavLink.href = "/music/music.html";
secondNavLink.textContent = "Musique du jour";

let thirdNavLink = document.createElement("a");
thirdNavLink.className = "nav-link";
thirdNavLink.href = "#";
thirdNavLink.textContent = "Historique";

let fourthNavLink = document.createElement("a");
fourthNavLink.className = "nav-link";
fourthNavLink.href = "/contact/contact.html";
fourthNavLink.textContent = "Contact";

navbar.appendChild(firstNavLink);
firstNavLink.appendChild(imgLogo);
navbar.appendChild(secondNavLink);
navbar.appendChild(thirdNavLink);
navbar.appendChild(fourthNavLink);
