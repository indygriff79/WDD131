// main.js
import { recipes } from './recipes.mjs';

const container = document.getElementById("recipes-container");

recipes.forEach(recipe => {
  const card = document.createElement("section");
  card.className = "recipe-card";

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < recipe.rating
      ? '<span aria-hidden="true">⭐</span>'
      : '<span aria-hidden="true">☆</span>'
  ).join("");

  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img" />
    <div class="tag">${recipe.category}</div>
    <h2 class="recipe-title">${recipe.name}</h2>
    <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
      ${stars}
    </span>
  `;

  container.appendChild(card);
});
