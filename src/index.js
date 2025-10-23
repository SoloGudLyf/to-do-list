import { addToDoToList, time, toDos } from "./add-to-dos.js";
import "./styles.css";

const toDo = document.querySelector("#toDo");
const addBtn = document.querySelector(".addToDo");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = toDo.value;
  if (value.trim() === "") {
    alert("Input cannot be empty");
    return;
  }
  addToDoToList(toDo.value);
  console.log(toDos);
  printToPage();
  document.querySelector(".check").addEventListener("click", checkToDo);
});


function printToPage() {
  const toDoList = document.querySelector(".toDoList");
  toDoList.textContent = "";
  for (const key of toDos) {
    const id = key.id;
    const li = document.createElement("li");
    li.innerHTML = `${key.name} <span class="time">(${key.timeInit})</span> <button class="check" data-id="${id}">✓</button><button class="del" data-id="${id}">X</button>`;
    toDoList.appendChild(li);
  }
}

function checkToDo(e) {
  const btnId = e.target.dataset.id;
  for (const element of toDos) {
    if (btnId === element.id) {
      element.check = true;
      e.target.id = "checkClicked";
    }
  }  
}

