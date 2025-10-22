export function contactUs(){
    const content = document.querySelector("#content");
    content.textContent = "";
    const h1 = document.createElement("h1");
    h1.textContent = "Contact Us";

    // Main Chef
    const divMainChef = document.createElement("div");
    divMainChef.classList.add("hours");
    divMainChef.classList.add("contact");
    divMainChef.innerHTML =
      "<h2>Solo</h2><div><span>Chef</span><span>666-666-6667</span><span>realEmail@believeMe.com</span></div>";
      content.appendChild(h1)
      content.appendChild(divMainChef)

      // Papa
      const divPapa = document.createElement("div");
      divPapa.classList.add("hours");
      divPapa.innerHTML =
        "<h2>Papa</h2><div><span>Manager</span><span>212-224-2362</span><span>realestEmail@notFake.com</span></div>";
        content.appendChild(divPapa)

}