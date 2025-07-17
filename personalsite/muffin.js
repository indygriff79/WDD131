document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("recipe-container");

  container.innerHTML = `
    <img src="muffin.jpg" alt="Vegan chocolate muffins" class="small-image"/>
    <section>
        <h2>Vegan Chocolate Muffins</h2>
        <h3>Ingredients:</h3>
        <ul>
            <li> 2.5 cups unsweetened soy milk</li>
            <li> 2 teaspoons apple cider vinegar</li>
            <li> 3 cups all-purpose flour</li>
            <li> 1 cup unsweetened cocoa powder</li>
            <li> 2 cups granulated sugar</li>
            <li> 4 teaspoons baking powder</li>
            <li> 1 teaspoon salt</li>
            <li> 2 tablespoons cornstarch</li>
            <li> 0.67 cup canola oil or other nuetral oil</li>
            <li> 2 teaspoons vanilla extract</li>
            <li> 3 cups vegan chocolate chips</li>
            </ul>
        <h3>Instructions:</h3>
        <ol>
            <li>Preheat oven to 400°F. Line a standard muffin pan with liners and spray them lightly with oil.</li>
            <li> Combine the soy milk and apple cider vinegar in a glass measuring cup or small bowl and set aside to curdle. This is your vegan buttermilk.</li>
            <li> In a large bowl, whisk together all the dry ingredients: flour, cocoa powder, grandulated sugar, baking powder,  salt, and cornstarch. If the cocoa powder is really lumpy, sift it in.</li>
            <li> Pour the vegan buttermilk, oil, and vanilla into the dry ingredients bowl. Stir with a spatula gently, being careful not to over mix. Over mixing muffin batter makes them hard instead of soft.</li>
            <li> Fold in most of the chocolate chips, saving about 1/4 cup for the tops.</li>
            <li> Fill muffin cups nearly to the top, and sprinkle, a few more chocolate chips on the tops.</li>
            <li> Bake for 26-28 minutes, until a toothpick inserted into the middle comes out mostly clean. Be careful not to over bake, or the muffins muffins will become dry and dense.</li>
            <li> Let them cool for 5 minutes in the pan, then transfer to a cooling rack.</li>
            <li>Enjoy! Store leftovers in an airtight container at room temperature for up to 3 days. They also freeze perfectly.</li>
        </ol>

        <button id="print-btn">Print Recipe</button>
    </section>
    `;
    const printButton = document.getElementById("print-btn");
    printButton.addEventListener("click", () => {
        window.print();
    });
});
