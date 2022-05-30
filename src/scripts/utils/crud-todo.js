const crudTodo = {
    todos: [],
    addTodo: (e) => {
        e.preventDefault();

        const todoId = +new Date();
        const todoTitle = document.getElementById("todo-title-input").value;

        const todoObject = (todoId, todoTitle) => {
            return {
                id: todoId,
                title: todoTitle
            }
        };

        todos.push(todoObject);
    },
    contentLoaded:  document.addEventListener('DOMContentLoaded', () => {
        const addTodoForm = document.getElementsByClassName('add-todo-form');

        addTodoForm.addEventListener('submit', addTodo());

        addTodoForm.addEventListener('input', (e) => {
            const value = e.target.value;

            console.log(value);
        })

        const editBtn = document.getElementsById('todo-card-edit-btn');
        editBtn.addEventListener('click', () => {
            alert('halo dwiky')
        })
    })
};
   
export default crudTodo;