export const toDos = [];
export function addToDoToList(value) {
  const toDo = {
    name: value,
    timeInit: time(),
    check: false,
    id: crypto.randomUUID(),
  };
  let toDos = JSON.parse(localStorage.getItem("toDos"));
  for (const element of toDos) {
    if (toDo.name == element.name) {
      alert("Task already exist");
      return;
    }
  }
  toDos.push(toDo);
  addToLStorage(toDos);
  return toDos;
}

export function time() {
  const now = new Date();
  const d = new Date();
  const options = { month: "short" }; // "long" for full month name, "short" for abbreviated
  const formattedMonth = new Intl.DateTimeFormat("en-US", options).format(d);
  const day = now.getDate();
  const hour = now.getHours();
  const mins = now.getMinutes();
  return `${day} ${formattedMonth} ${hour} hrs ${mins} mins`;
}

export function addToLStorage(list) {
  localStorage.setItem("toDos", JSON.stringify(list));
}
