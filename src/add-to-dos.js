const toDos = {};
function addToDoToList(value) {
  const toDo = { name: value, timeInit: time() };
  toDos.toDo = toDo;
  return toDos;
}

function time() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();
  const hour = now.getHours();
  const mins = now.getMinutes();
  return month + day + hour + mins;
}
