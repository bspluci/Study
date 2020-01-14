const todoForm = document.querySelector(".js-todo"),
   todoInput = todoForm.querySelector("input"),
   todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";

var todos = [];

function deleteTodo(event) {
   const btn = event.target;
   const li = btn.parentNode;
   todoList.removeChild(li);
   const cleadTodos = todos.filter(function(toDo) {
      return toDo.id !== parseInt(li.id);
   });
   console.log(cleadTodos);
   todos = cleadTodos;
   saveTodo();
}

function saveTodo() {
   localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function paintTodo(text) {
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   const span = document.createElement("span");
   const newId = todos.length + 1;
   delBtn.innerText = "❌";
   delBtn.addEventListener("click", deleteTodo);
   span.innerText = text;
   li.appendChild(delBtn);
   li.appendChild(span);
   li.id = newId;
   todoList.appendChild(li);
   const todoObj = {
      text: text,
      id: newId
   };
   todos.push(todoObj);
   saveTodo();
}

function handleSubmit(event) {
   event.preventDefault();
   const currentValue = todoInput.value;
   paintTodo(currentValue);
   todoInput.value = "";
}

function loadTodos() {
   const loadedTodos = localStorage.getItem(TODOS_LS);
   if (loadedTodos !== null) {
      const parsedTodos = JSON.parse(loadedTodos);
      parsedTodos.forEach(function(toDo) {
         paintTodo(toDo.text);
      });
   }
}

function init() {
   loadTodos();
   todoForm.addEventListener("submit", handleSubmit);
}

init();
