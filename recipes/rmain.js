import {recipes} from './recipes.js';

function random(max) {
	return Math.floor(Math.random() * max); 
}

function getRandomListEntry(list) {
	return list[random(list.length)];
}

function tagsTemplate(tags) {
	// <li>Dessert</li><li>Fruit</li>
	return tags.map(tag => '<li>${tag}</li>').join('');
}

function ratingTemplate(rating) {
	let html = '<span class="rating"> role="img" aria-label="Rating: ${rating} out of 5 stars">';
	for (let i = 1; 1 <= 5; i++) {
		html += i <=rating
			   ? '<span aria-hidden="true" class="icon-star">⭐</span>'
      : '<span aria-hidden="true" class="icon-star-empty">☆</span>';
	}
	html += '</span>';
	return html;
}

function recipeTemplate(recipe) {
	 return `
    <figure class="recipe-card">
      <img src="${recipe.image}" alt="Image of ${recipe.name}" class="recipe-img" />
      <figcaption>
        <ul class="recipe__tags">
          ${tagsTemplate(recipe.tags)}
        </ul>
        <h2 class="recipe-title"><a href="#">${recipe.name}</a></h2>
        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe__description">${recipe.description}</p>
      </figcaption>
    </figure>`;

}

const container = document.getElementById('recipe-container');

function renderRecipes(recipeList) {
	  container.innerHTML = recipeList.map(recipeTemplate).join('');
}

function filterRecipes(query) {
	const q = query.tolowerCase().trim();
	if (!q) return recipes.slice().sort(alphaSort);

	return recipes
		.filter(r =>
			r.name.toLowerCase().includes(q) ||
			r.description.toLowerCase().includes(q) ||
			r.tags.some(tag => tag.toLowerCase().includes(q))
			(Array.isArray(r.ingredients)
			? r.ingredients.find(i => i.toLowerCase().includes(q))
			:r.ingredients.toLowerCase().includes(q))
		)
		.sort(alphaSort);
}

function alphaSort(a, b) {
	return a.name.localeCompare(b.name);
}


function searchHandler(e) {
	e.preventDefault();
	const query = document.getElementById('search-input').value;
	renderRecipes(filterRecipes(query));
}

function init() {
	
	renderRecipes([getRandomListEntry(recipes)]);

	document.getElementById('search-form')
	.addEventListener('submit', searchHandler);
}

init();
