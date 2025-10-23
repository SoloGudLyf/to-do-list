import { addToDoToList, toDos, addToLStorage } from "./add-to-dos.js";
import "./styles.css";

// Get DOM elements
const toDo = document.querySelector("#toDo");
const addBtn = document.querySelector(".addToDo");
const ul = document.querySelector(".toDoList");

// Add task to List
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
});

// Check or Delete Task
ul.addEventListener("click", (e) => {
  if (e.target.className === "check") {
    checkToDo(e);
  } else if (e.target.className === "del") {
    delToDo(e);
  }
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
      element.check = element.check == true ? false : true;
      console.log(element.check);
      if (element.check === true) {
        e.target.id = "checkClicked";
      } else {
        e.target.id = null
      }
    }
  }
}

function delToDo(e) {
  const btnId = e.target.dataset.id;
  const UpdatedToDos = toDos.map((elem, index) => {
    if (e.target.className === "del" && btnId === elem.id) {
      const elemId = index;
      toDos.splice(elemId, 1);
      printToPage();
    }
  });
}
