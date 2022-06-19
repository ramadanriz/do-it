/* eslint-disable no-undef */
function main () {
  const Swal = require('sweetalert2')
  const totalGoals = document.getElementById('total-goals')
  const totalTodo = document.getElementById('total-todo')
  const addNewGoalsForm = document.getElementById('addNewGolasForm')
  const addNewGoalsInput = document.getElementById('addNewGoalsInput')
  const goalsList = document.getElementById('goalsList')
  const addNewTodoForm = document.getElementById('addNewTodoForm')
  const addNewTodoSelect = document.getElementById('addNewTodoSelect')
  const addNewTodoInput = document.getElementById('addNewTodoInput')
  const editTodoForm = document.getElementById('editTodoForm')
  const editTodoSelect = document.getElementById('editTodoSelect')
  const editTodoInput = document.getElementById('editTodoInput')
  const todoList = document.getElementById('todoList')
  const GOALS_KEY = 'GOALS_KEY'
  const TODOS_KEY = 'TODOS_KEY'
  const SELECTED_GOALS_KEY = 'SELECTED_GOALS_KEY'
  let goals = JSON.parse(localStorage.getItem(GOALS_KEY)) || []
  let todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || []
  let selectedGoals = localStorage.getItem(SELECTED_GOALS_KEY)
  let todoToEdit = null

  function generateId () {
    return Date.now().toString()
  }

  function saveToLocalStorage () {
    localStorage.setItem(GOALS_KEY, JSON.stringify(goals))
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    localStorage.setItem(SELECTED_GOALS_KEY, selectedGoals)
  }

  function formOptions () {
    addNewTodoSelect.innerHTML += '<option value="">Pilih Goals</option>'
    editTodoSelect.innerHTML += '<option value="">Pilih Goals</option>'
    goals.forEach(({ _id, goal }) => {
      addNewTodoSelect.innerHTML += `<option value=${_id}>${goal}</option>`
      editTodoSelect.innerHTML += `<option value=${_id}>${goal}</option>`
    })
  }

  function clearElements (elements) {
    elements.forEach(element => {
      while (element.firstChild) {
        element.removeChild(element.firstChild)
      }
    })
  }

  function renderReport () {
    totalGoals.innerText = `${goals.length}`
    totalTodo.innerText = `${todos.length}`
  }

  function renderAllGoals () {
    goalsList.innerHTML += ''
    goals.forEach(({ _id, goal }) => {
      goalsList.innerHTML += ` 
        <li class="list-group-item py-3 px-2 d-flex align-items-center border-0 ${_id === selectedGoals ? 'active fw-bold' : ''}" data-goal-id=${_id}>
        <div class="delete-goals-btn d-flex align-items-center">  
          <img src="web-icon/trash-can.svg" alt="icon hapus goals" id="trash" class="icon-goals">   
        </div> 
          ${goal}
        </li>`
    })
  }

  function renderAllTodo () {
    let todoRender = todos
    if (selectedGoals || selectedGoals !== 'null') {
      todoRender = todos.filter((todo) => todo.goalId === selectedGoals)
    }

    todoRender.forEach(({ _id, todo }) => {
      todoList.innerHTML += `
          <div class="todo-card p-3 d-flex my-2">
            <div class="todo-card-left-section d-flex align-items-center w-75">
              <input class="task-checkbox" id="task-${_id}" type="checkbox">
              <label for="task-${_id}">
                  <span>&#10004;</span>
                  <p class="mb-0" id="task-title">${todo}</p>
              </label>
            </div>

            <div class="todo-card-right-section d-flex justify-content-end align-items-center w-25">
              <button class="todo-card-edit-btn me-2 d-flex align-items-center" aria-label="edit todo">
                <img src="web-icon/pen-to-square.svg" alt="icon edit todo" class="edit icon-todo" data-edit-todo=${_id}>
              </button>
              <button class="todo-card-delete-btn d-flex align-items-center" aria-label="delete todo">
                <img src="web-icon/trash-can.svg" alt="icon hapus todo" class="delete icon-todo" data-delete-todo=${_id}>
              </button>
            </div>
          </div>`
    })
  }

  function renderAllFunction () {
    clearElements([goalsList, addNewTodoSelect, editTodoSelect, todoList])
    renderAllGoals()
    formOptions()
    renderAllTodo()
    renderReport()
  }

  addNewGoalsForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newGoal = addNewGoalsInput.value
    const generatedID = generateId()
    goals.push({ _id: generatedID, goal: newGoal })
    addNewGoalsInput.value = ''
    saveToLocalStorage()
    renderAllFunction()
  })

  addNewTodoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const generatedID = generateId()
    todos.push({ _id: generatedID, goalId: addNewTodoSelect.value, todo: addNewTodoInput.value })
    addNewTodoSelect.value = ''
    addNewTodoInput.value = ''
    saveToLocalStorage()
    renderAllFunction()
  })

  editTodoForm.addEventListener('submit', function (event) {
    event.preventDefault()
    todoToEdit.goalId = editTodoSelect.value
    todoToEdit.todo = editTodoInput.value
    editTodoForm.style.display = 'none'
    addNewTodoForm.style.display = 'flex'
    editTodoSelect.value = ''
    editTodoInput.value = ''
    saveToLocalStorage()
    renderAllFunction()
  })

  todoList.addEventListener('click', (element) => {
    if (element.target.classList.contains('edit')) {
      addNewTodoForm.style.display = 'none'
      editTodoForm.style.display = 'flex'
      todoToEdit = todos.find((todo) => todo._id === element.target.dataset.editTodo)
      editTodoSelect.value = todoToEdit.goalId
      editTodoInput.value = todoToEdit.todo
    }
    if (element.target.classList.contains('delete')) {
      const todoDelete = todos.findIndex((todo) => todo._id === element.target.dataset.deleteTodo)
      Swal.fire({
        title: 'Anda ingin menghapus todo ini?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya',
        cancelButtonText: 'Batal',
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
          todos.splice(todoDelete, 1)
          saveToLocalStorage()
          renderAllFunction()
          Swal.fire(
            'Berhasil',
            'Todo anda telah dihapus',
            'success'
          )
        }
      })
    }
  })

  goalsList.addEventListener('click', (element) => {
    if (element.target.tagName.toLowerCase() === 'li') {
      selectedGoals = element.target.dataset.goalId
      saveToLocalStorage()
      renderAllFunction()
    }

    if (element.target.tagName.toLowerCase() === 'img') {
      goals = goals.filter((goal) => goal._id !== selectedGoals)
      todos = todos.filter((todo) => todo.goalId !== selectedGoals)
      selectedGoals = null
      saveToLocalStorage()
      renderAllFunction()
    }
  })

  const DOMReady = function (callback) {
    document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback)
  }

  DOMReady(function () {
    const checkingStorage = typeof (Storage)
    if (checkingStorage) {
      renderAllFunction()
    } else {
      alert('Browser kamu tidak mendukung local storage')
    }
  })
}

export default main
