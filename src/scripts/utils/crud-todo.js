function crudTodo() {
    const todos = [];
    const TODOS_LOCAL_STORAGE = "TODOS_LOCAL_STORAGE";

    const addTodoForm = document.getElementById("add-todo-form");

    addTodoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const todoId = +new Date();
        const todoTitle = document.getElementById("todo-title-input").value;
        
        const generateTodoObject = () => {
            return {
                id: todoId,
                task: todoTitle
            }
        }

        const todoObject = generateTodoObject();

        todos.push(todoObject);
        saveData();

        //inisialisasi element container untuk todo
        //dan mengosongkan isi element container sebelum looping data terbaru
        const todoListContainer = document.querySelector(".todo-list-container");
        todoListContainer.innerHTML = "";
        
        //looping semua data todo
        for (const todoItem of todos) {
            const newTodo = generateTodoElement(todoItem);
            todoListContainer.append(newTodo);
        }


        document.getElementById("todo-title-input").value = null;

        console.log(todos);
    })

    // const generateTodoElement = (todoObject) => {
    //     const checkBoxLabel = document.createElement("span");
    //     checkBoxLabel.innerText = `&#10004;`;

    //     const todoTitleElement = document.createElement("p");
    //     todoTitleElement.classList.add("mb-0");
    //     todoTitleElement.innerText = todoObject.task;

    //     const labelElement = document.createElement("label");
    //     labelElement.setAttribute("for", `task-${todoObject.id}`);
    //     labelElement.append(checkBoxLabel, todoTitleElement);

    //     const checkBoxElement = document.createElement("input");
    //     checkBoxElement.setAttribute("class", "task-checkbox");
    //     checkBoxElement.setAttribute("id", `task-${todoObject.id}`);
    //     checkBoxElement.setAttribute("type", "checkbox");

    //     const todoCardLeftSection = document.createElement("div");
    //     todoCardLeftSection.setAttribute("class", "todo-card-left-section d-flex align-items-center w-75");
    //     todoCardLeftSection.append(checkBoxElement, labelElement);

    //     const editTodoIcon = document.createElement("ion-icon");
    //     editTodoIcon.setAttribute("name", "create-outline");

    //     const deleteTodoIcon = document.createElement("ion-icon");
    //     deleteTodoIcon.setAttribute("name", "trash-outline");

    //     const editTodoBtn = document.createElement("button");
    //     editTodoBtn.setAttribute("class", "todo-card-edit-btn me-2 d-flex align-items-center");
    //     editTodoBtn.append(editTodoIcon);

    //     const deleteTodoBtn = document.createElement("button");
    //     deleteTodoBtn.setAttribute("class", "todo-card-delete-btn d-flex align-items-center");
    //     deleteTodoBtn.append(deleteTodoIcon);

    //     const todoCardRightSection = document.createElement("div");
    //     todoCardRightSection.setAttribute("class", "todo-card-right-section d-flex justify-content-end align-items-center w-25");
    //     todoCardRightSection.append(editTodoBtn, deleteTodoBtn);

    //     const todoCard = document.createElement("div");
    //     todoCard.classList.add("todo-card", "p-3", "d-flex", "my-4");
    //     todoCard.append(todoCardLeftSection, todoCardRightSection);

    //     return todoCard;
    // }

    const generateTodoElement = (todoObject) => {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card", "p-3", "d-flex", "my-4");

        todoCard.innerHTML = `
            <div class="todo-card-left-section d-flex align-items-center w-75">
                <input class="task-checkbox" id="task-${todoObject.id}" type="checkbox">
                <label for="task-${todoObject.id}">
                    <span>&#10004;</span>
                    <p class="mb-0">${todoObject.task}</p>
                </label>
            </div>
        `

        const editTodoIcon = document.createElement("ion-icon");
        editTodoIcon.setAttribute("name", "create-outline");

        const deleteTodoIcon = document.createElement("ion-icon");
        deleteTodoIcon.setAttribute("name", "trash-outline");

        const editTodoBtn = document.createElement("button");
        editTodoBtn.setAttribute("class", "todo-card-edit-btn me-2 d-flex align-items-center");
        editTodoBtn.append(editTodoIcon);

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.setAttribute("class", "todo-card-delete-btn d-flex align-items-center");
        deleteTodoBtn.append(deleteTodoIcon);
        deleteTodoBtn.addEventListener("click", function () {
            removeTodo(todoObject.id);
        });

        const todoCardRightSection = document.createElement("div");
        todoCardRightSection.setAttribute("class", "todo-card-right-section d-flex justify-content-end align-items-center w-25");
        todoCardRightSection.append(editTodoBtn, deleteTodoBtn);

        todoCard.append(todoCardRightSection);

        return todoCard;
    }

    function findTodoIndex(todoId) {
        for(const index in todos){
            if(todos[index].id === todoId){
                return index
            }
        }

        return -1
    }

    function removeTodo(todoId) {
        const todoTarget = findTodoIndex(todoId);

        if(todoTarget === -1){
            return;
        } 

        todos.splice(todoTarget, 1);

        //inisialisasi element container untuk todo
        //dan mengosongkan isi element container sebelum looping data terbaru
        const todoListContainer = document.querySelector(".todo-list-container");
        todoListContainer.innerHTML = "";
        
        //looping semua data todo
        for (const todoItem of todos) {
            const newTodo = generateTodoElement(todoItem);
            todoListContainer.append(newTodo);
        }

        saveData();
    }

    // implementasi web storage
    function saveData() {
        if (typeof(Storage) !== undefined) {
            const parsed = JSON.stringify(todos);
            localStorage.setItem(TODOS_LOCAL_STORAGE, parsed);
        } else {
            alert("Browser kamu tidak mendukung local storage");
        }

        // if(isStorageExist()){
        //     const parsed = JSON.stringify(todos);
        //     localStorage.setItem(TODOS_LOCAL_STORAGE, parsed);
        // }
    }

    // function isStorageExist() {
    //     if(typeof(Storage) === undefined){
    //         alert("Browser kamu tidak mendukung local storage");
    //         return false
    //     }
    //     return true;
    // }

    function loadDataFromStorage() {
        const serializedData = localStorage.getItem(TODOS_LOCAL_STORAGE);
        
        let data = JSON.parse(serializedData);
        
        if(data !== null){
            for(const todo of data){
                todos.push(todo);
            }
        }

        //inisialisasi element container untuk todo
        //dan mengosongkan isi element container sebelum looping data terbaru
        const todoListContainer = document.querySelector(".todo-list-container");
        todoListContainer.innerHTML = "";
        
        //looping semua data todo
        for (const todoItem of todos) {
            const newTodo = generateTodoElement(todoItem);
            todoListContainer.append(newTodo);
        }
    }
}

export default crudTodo;