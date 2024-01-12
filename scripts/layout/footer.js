// Sélection de body
let body = document.querySelector("body");

// Création et importation du footer
let footer = document.createElement("footer");
body.appendChild(footer);

// Création et importation des parties du footer
let lFooter = document.createElement("div");
let cFooter = document.createElement("div");

lFooter.className = "footer-group";
cFooter.className = "footer-group";

footer.appendChild(lFooter);
footer.appendChild(cFooter);

// Création et importation des éléments de la partie gauche
let lFooterItem = document.createElement("p");
lFooterItem.id = "copyright";
lFooterItem.className = "footer-item";
lFooterItem.textContent = "Copyright © 2024 nathuz.fr"
lFooter.appendChild(lFooterItem);

// Création et importation des éléments de la partie centre
let cFooterItem = document.createElement("p");
cFooterItem.className = "footer-item";
cFooterItem.textContent = "Animation de fond fait par Yoshiyuki ITO sur codepen.io";
cFooter.appendChild(cFooterItem);