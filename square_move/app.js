// Créer un élément carré rouge
const square = document.createElement("div");
square.style.width = "150px";
square.style.height = "150px";
square.style.backgroundColor = "red";
square.style.position = "absolute";
document.body.appendChild(square);

// Initialiser la position du carré au centre de l'écran
let positionX = (window.innerWidth - 150) / 2; // Centré horizontalement
let positionY = (window.innerHeight - 150) / 2; // Centré verticalement
const speed = 10; // vitesse de déplacement

// Mettre à jour la position initiale du carré
square.style.left = positionX + "px";
square.style.top = positionY + "px";

// Fonction pour gérer les déplacements avec le clavier
function moveSquare(event) {
  switch (event.code) {
    case "ArrowUp":
      positionY -= speed; // Déplacer vers le haut
      break;
    case "ArrowDown":
      positionY += speed; // Déplacer vers le bas
      break;
    case "ArrowLeft":
      positionX -= speed; // Déplacer vers la gauche
      break;
    case "ArrowRight":
      positionX += speed; // Déplacer vers la droite
      break;
  }

  // Empêcher le carré de sortir des limites de la fenêtre
  positionX = Math.max(0, Math.min(positionX, window.innerWidth - 50));
  positionY = Math.max(0, Math.min(positionY, window.innerHeight - 50));

  // Appliquer la nouvelle position au carré
  square.style.left = positionX + "px";
  square.style.top = positionY + "px";

  changeColorRandom(event);
}

// changer couleur aléatoirement touche c
function changeColorRandom(event) {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  if (event.code === "KeyC") {
    square.style.backgroundColor = color;
  }
}

// Ajouter un écouteur d'événements pour détecter les touches du clavier
window.addEventListener("keydown", moveSquare);
