const formElement = document.querySelector(".form");

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
});