const formElement = document.querySelector(".form");
const todoListElement = document.querySelector(".todo-list");

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
});

const createTodo = (todo) =>{
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