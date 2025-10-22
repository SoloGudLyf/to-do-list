export function menuTab() {
  const content = document.querySelector("#content");
  content.textContent = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  // Beverages category
  const foodCat = document.createElement("h2");
  foodCat.textContent = "Beverages";
  const divBev1 = document.createElement("div");
  divBev1.innerHTML =
    "<h3>Bissap</h3> <p>A vibrant, tart, and naturally sweet drink brewed from dried hibiscus flowers, infused with fresh ginger and a hint of mint. Highly refreshing, packed with flavor, and a perfect palate cleanser.</p> <span>$5</span><div></div>";
  const divBev2 = document.createElement("div");
  divBev2.innerHTML =
    "<h3>Ginger Drink</h3> <p>A powerful, spicy, and invigorating tonic made from freshly pounded ginger root, a touch of lemon, and a hint of sweetness. An authentic, natural energizer—handle the heat!</p> <span>$5</span><div></div>";
  const divCat1 = document.createElement("div");
  divCat1.appendChild(divBev1);
  divCat1.appendChild(divBev2);
  divCat1.classList.add("cat1");
  content.appendChild(h1);
  content.appendChild(foodCat);
  content.appendChild(divCat1);

  // Main Category
  const foodCat3 = document.createElement("h2");
  foodCat3.textContent = "Main Dishes";
  const divMain1 = document.createElement("div");
  divMain1.innerHTML =
    "<h3>Jollof Rice & Grilled Chicken</h3> <p>The undisputed king of West African cuisine! Fragrant long-grain rice slow-cooked in a rich, spicy tomato-pepper base until it achieves that famous, deep red color and smoky flavor. Served with a perfectly seasoned, charred half-chicken. A true celebratory dish—the best Jollof you'll ever taste!</p> <span>$25</span><div></div>";
  const divMain2 = document.createElement("div");
  divMain2.innerHTML =
    "<h3>Groundnut Soup with Fufu</h3> <p>A deeply satisfying, traditional soup made from rich, roasted groundnuts (peanuts), tomatoes, and slow-simmered Goat Meat (or substitute Chicken/Fish). Served with Fufu (a soft, swallowable dough) for dipping. Authentic, hearty, and full of warming, complex flavors.</p> <span>$28</span><div></div>";
  const divCat3 = document.createElement("div");
  divCat3.appendChild(divMain1);
  divCat3.appendChild(divMain2);
  divCat3.classList.add("cat1");
  content.appendChild(foodCat3);
  content.appendChild(divCat3);

  // Sides Category
  const foodCat2 = document.createElement("h2");
  foodCat2.textContent = "Sides & Staples";
  const divSide1 = document.createElement("div");
  divSide1.innerHTML =
    "<h3>Fried Ripe Plantain (Kelewele Style)</h3> <p>Sweet, soft, and slightly caramelized fried plantain pieces. The essential partner for any savory stew or rice dish.</p> <span>$6</span><div></div>";
  const divSide2 = document.createElement("div");
  divSide2.innerHTML =
    "<h3>Fufu / Banku / Kenkey</h3> <p>Choose your traditional 'swallow' dough! Fufu (pounded cassava/plantain), Banku (fermented corn/cassava), or Kenkey (fermented corn dough wrapped in corn husks). The authentic way to enjoy our soups and stews.</p> <span>$5</span><div></div>";
  const divCat2 = document.createElement("div");
  divCat2.appendChild(divSide1);
  divCat2.appendChild(divSide2);
  divCat2.classList.add("cat1");
  content.appendChild(foodCat2);
  content.appendChild(divCat2);
}
