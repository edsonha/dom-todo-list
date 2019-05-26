const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

const enterButton = document.getElementById("enter");
let userInput = document.getElementById("userinput");
const ul = document.getElementById("todo-list");

for (let i = 0; i < tasks.length; i++) {
  createNewTodo(tasks[i]);
}

function createNewTodo(todoContent) {
  //Create NewTodo
  const li = document.createElement("li");
  li.textContent = todoContent;
  ul.appendChild(li);
  userInput.value = "";
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });

  //Create Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete!"));
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", function() {
    li.parentNode.removeChild(li);
  });
}

function addListAfterKeypress(event) {
  if (userInput.value.length > 0 && event.which === 13) {
    createNewTodo(userInput.value);
  }
}

function addListAfterClick(userInput) {
  if (userInput.value.length > 0) {
    createNewTodo(userInput.value);
  } else {
    alert("Please enter Todo");
  }
}

enterButton.addEventListener("click", () => addListAfterClick(userInput));

userInput.addEventListener("keypress", addListAfterKeypress);
