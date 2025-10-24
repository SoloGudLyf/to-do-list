import { addToDoToList, toDos, addToLStorage } from "./add-to-dos.js";
import "./styles.css";

// Get DOM elements
const toDo = document.querySelector("#toDo");
const addBtn = document.querySelector(".addToDo");
const ul = document.querySelector(".toDoList");
printToPage();

// Add task to List
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = toDo.value;
  if (value.trim() === "") {
    alert("Input cannot be empty");
    return;
  }
  addToDoToList(toDo.value);
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
  let toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  console.log(toDos);
  if (toDos.length === 0) return;

  for (const key of toDos) {
    const id = key.id;
    const li = document.createElement("li");
    li.innerHTML = `${key.name} <span class="time">(${key.timeInit})</span> <button class="check" data-id="${id}">✓</button><button class="del" data-id="${id}">X</button>`;
    toDoList.appendChild(li);
    if (key.check === true) {
      li.querySelector(".check").id = "checkClicked";
    }
  }
}

function checkToDo(e) {
  const btnId = e.target.dataset.id;
  let toDos = JSON.parse(localStorage.getItem("toDos"));
  for (const element of toDos) {
    if (btnId === element.id) {
      element.check = element.check == true ? false : true;
      if (element.check === true) {
        e.target.id = "checkClicked";
        addToLStorage(toDos);
      } else {
        e.target.id = null;
      }
    }
  }
  addToLStorage(toDos);
}

function delToDo(e) {
  const btnId = e.target.dataset.id;
  const toDos = JSON.parse(localStorage.getItem("toDos"));
  const UpdatedToDos = toDos.filter((elem) => {
    return btnId !== elem.id;
  });
  addToLStorage(UpdatedToDos);
  printToPage();
}
