export function pageLoad() {
  const content = document.querySelector("#content");
  content.textContent = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Lizzy's Cuisine";
  const divWelcomeMsg = document.createElement("div");
  divWelcomeMsg.classList.add("welcome-msg");
  divWelcomeMsg.innerHTML =
    " Welcome to <strong>Lizzy's Cuisine</strong>. We believe the best meals are made with intention. Every ingredient is hand-selected, every dish is crafted with a meticulous attention to detail, and every moment in our dining room is designed to feel like an escape. Join us for a unique culinary journey where passion is the main ingredient. <span>Concept Statement</span>";
  const divHours = document.createElement("div");
  divHours.classList.add("hours");
  divHours.innerHTML =
    "<h2>Hours</h2><span>Sunday: 8am - 8pm</span><span>Monday: 6am - 6pm</span><span>Tuesday: 6am - 6pm</span><span>Wednesday: 6am - 6pm</span><span>Thursday: 6am - 10pm</span><span>Friday: 6am - 10pm</span><span>Saturday: 8am - 10pm</span>";
  const divLocation = document.createElement("div");
  divLocation.classList.add("divLocation");
  divLocation.innerHTML = "<h2>Location</h2> 625 Kasoa, Accra, Ghana";
  const container = document.createElement("div");
  container.classList.add("container");
  container.appendChild(divWelcomeMsg);
  container.appendChild(divHours);
  container.appendChild(divLocation);
  content.appendChild(h1);
  content.appendChild(container);
}
