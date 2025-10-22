import { addToDoToList, time, toDos } from "./add-to-dos";

const toDo = document.querySelector("#toDo");
const addBtn = document.querySelector(".addToDo");
addBtn.addEventListener("click", (e) => {
  console.log(toDo.value);
  e.preventDefault();
  addToDoToList(toDo.value);
  console.log(toDos);
  printToPage();
});

function printToPage() {
  const toDoList = document.querySelector(".toDoList");
  toDoList.textContent = "";
  for (const key of toDos) {
    console.log(key);

    const li = document.createElement("li");
    li.innerHTML = `${key.name} <span class="time">${key.timeInit}</span> <button class="check">✓</button><button class="del">X</button>`;
    toDoList.appendChild(li);
  }
  console.log(toDos);
}
