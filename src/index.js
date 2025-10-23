import { addToDoToList, time, toDos } from "./add-to-dos";
import "./styles.css"


const toDo = document.querySelector("#toDo");
const addBtn = document.querySelector(".addToDo");
const checkBtn = document.querySelector(".check")

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = toDo.value
  if (value.trim()===""){
    alert("Input cannot be empty")
    return
  }
  addToDoToList(toDo.value);
  console.log(toDos);
  printToPage();
});

function printToPage() {
  const toDoList = document.querySelector(".toDoList");
  toDoList.textContent = "";
  for (const key of toDos) {
    const id = crypto.randomUUID()
    const li = document.createElement("li");
    li.innerHTML = `${key.name} <span class="time">(${key.timeInit})</span> <button class="check" data-id="${id}">✓</button><button class="del" data-id="${id}">X</button>`;
    toDoList.appendChild(li);
  }
}
