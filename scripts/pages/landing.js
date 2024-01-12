// Sélection de body
let body = document.querySelector("body");

// Création et importation du main
let main = document.createElement("main");
body.appendChild(main);

// Création et importation du titre
let title = document.createElement("h1");
title.textContent = "One Day One Music";
main.appendChild(title);

// Création et importation de la description
let description = document.createElement("p");
description.className = "description";
description.textContent = 'Bienvenue sur One Day One Music. Chaque jour, une nouvelle musique apparaitra sur le site, donnez votre avis dessus en cliquant sur "J\'aime" ou "Je n\'aime pas".';
main.appendChild(description);

// Création et importation du bouton
let homeBtn = document.createElement("a");
homeBtn.className = "primary-btn";
homeBtn.href = "/music/music.html";
homeBtn.textContent = "Découvrir →";
main.appendChild(homeBtn);