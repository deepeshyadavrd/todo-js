const formElement = document.querySelector(".form");
const todoListElement = document.querySelector(".todo-list");

let todoList = [];

formElement.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log(e.target);

    const inputtedValue = e.target.elements['input-add-todo'].value;
    if(!inputtedValue){
        return;
    }
    const todo = {
        id: new Date().getTime().toString(),
        todo: inputtedValue,
    }

    console.log(todo);
    createTodo(todo);
    formElement.reset();
});

todoListElement.addEventListener('click', e=>{
    const deleteBtnElement = e.target.closest(".todo-item-delete-btn");

    if(!deleteBtnElement){
        return;
    }

    const currentTodoItemElement = deleteBtnElement.parentElement;
    deleteTodo(currentTodoItemElement.id);
    currentTodoItemElement.remove();
    // console.log(currentTodoItemElement);
})

const createTodo = (todo) =>{
    todoList.push(todo);
    localStorage.setItem("todo-list", JSON.stringify(todoList));
    
    createTodoItem(todo);
}

const createTodoItem = ({todo, id}) => {
    const todoItem = `<li id=${id} class="todo-item">
                    <p>${todo}</p>
                    <button class="todo-item-delete-btn">
                        <i class="ri-close-line"></i>
                    </button>
                </li>`;

    todoListElement.insertAdjacentHTML("beforeend",todoItem)
}

const deleteTodo = (id) =>{
    const updatedTodo = todoList.filter((todo) => todo.id !== id);
    todoList = updatedTodo;
    localStorage.setItem("todo-list", JSON.stringify(todoList));
}

const init = () => {
    const allTodo = JSON.parse(localStorage.getItem("todo-list") || []);
    todoList = allTodo;
    todoList.forEach((todo) => createTodoItem(todo));
}

window.addEventListener("DOMContentLoaded", init);