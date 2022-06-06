function main () {
  const totalGoals = document.getElementById('total-goals')
  const totalTodo = document.getElementById('total-todo')
  const addNewGoalsForm = document.getElementById('addNewGolasForm')
  const addNewGoalsInput = document.getElementById('addNewGoalsInput')
  const goalsList = document.getElementById('goalsList')
  const currentShowTodoList = document.getElementById('currentShowTodoList')
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

  function renderAllFunction () {
    totalGoals.innerText = `${goals.length}`
    totalTodo.innerText = `${todos.length}`

    if (!selectedGoals || selectedGoals === 'null') {
      currentShowTodoList.innerHTML = 'Daftar Semua Kegiatan'
    } else {
      const currentGoal = goals.find((goal) => goal._id === selectedGoals)
      currentShowTodoList.innerHTML = `Daftar Kegiatan ${currentGoal.goal} <span>(Hapus Goals)</span>`
    }

    clearChildElements(goalsList)
    clearChildElements(addNewTodoSelect)
    clearChildElements(editTodoSelect)
    clearChildElements(todoList)
    renderAllGoals()
    renderFormOptions()
    renderAllTodo()
  }

  function saveToLocalStorage () {
    localStorage.setItem(GOALS_KEY, JSON.stringify(goals))
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    localStorage.setItem(SELECTED_GOALS_KEY, selectedGoals)
  }

  function renderFormOptions () {
    addNewTodoSelect.innerHTML += '<option value="">Pilih Goals</option>'
    editTodoSelect.innerHTML += '<option value="">Pilih Goals</option>'
    goals.forEach(({ _id, goal }) => {
      addNewTodoSelect.innerHTML += `<option value=${_id}>${goal}</option>`
      editTodoSelect.innerHTML += `<option value=${_id}>${goal}</option>`
    })
  }

  function clearChildElements (element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }

  function renderAllGoals () {
    goalsList.innerHTML += `
      <li class="list-group-item px-3 border-0 ${selectedGoals === 'null' || selectedGoals === null ? 'active fw-bold' : ''}" data-goal-id="">Semua Kegiatan</li>
      `
    goals.forEach(({ _id, goal }) => {
      goalsList.innerHTML += ` <li class="list-group-item px-3 border-0 ${_id === selectedGoals ? 'active fw-bold' : ''}" data-goal-id=${_id}>${goal}</li>`
    })
  }

  function renderAllTodo () {
    let todoRender = todos
    if (selectedGoals && selectedGoals !== 'null') {
      todoRender = todos.filter((todo) => todo.goalId === selectedGoals)
    }

    todoRender.forEach(({ _id, goalId, todo }) => {
      const { goal } = goals.find(({ _id }) => _id === goalId)
      todoList.innerHTML += `
          <div class="col-md">
              <div class="card shadow-sm">
                  <div class="card-body">
                      <h5 class="card-title py-2 rounded text-center align-self-center">${goal}</h5>
                      <p class="card-text">${todo}</p>
                      <div class="todo-action mt-1">
                          <ion-icon name="create" class="edit" data-edit-todo=${_id}></ion-icon>
                          <ion-icon name="trash" class="delete" data-delete-todo=${_id}></ion-icon>
                      </div>
                  </div>
              </div>
          </div>`
    })
  }

  // Add New Goals
  addNewGoalsForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newGoal = addNewGoalsInput.value
    goals.push({
      _id: Date.now().toString(),
      goal: newGoal
    })
    addNewGoalsInput.value = ''
    saveToLocalStorage()
    renderAllFunction()
  })

  // Add New Todo
  addNewTodoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    todos.push({
      _id: Date.now().toString(),
      goalId: addNewTodoSelect.value,
      todo: addNewTodoInput.value
    })
    addNewTodoSelect.value = ''
    addNewTodoInput.value = ''
    saveToLocalStorage()
    renderAllFunction()
  })

  // Update Todo With New Values
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

  // Load Edit Todo Form With Values
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
      todos.splice(todoDelete, 1)
      saveToLocalStorage()
      renderAllFunction()
    }
  })

  // Get Selected Goals
  goalsList.addEventListener('click', (element) => {
    if (element.target.tagName.toLowerCase() === 'li') {
      if (!element.target.dataset.goalId) {
        selectedGoals = null
      } else {
        selectedGoals = element.target.dataset.goalId
      }
      saveToLocalStorage()
      renderAllFunction()
    }
  })

  // Delete Goals
  currentShowTodoList.addEventListener('click', (element) => {
    if (element.target.tagName.toLowerCase() === 'span') {
      goals = goals.filter((goal) => goal._id !== selectedGoals)
      todos = todos.filter((todo) => todo.goalId !== selectedGoals)
      selectedGoals = null
      saveToLocalStorage()
      renderAllFunction()
    }
  })

  // window.addEventListener('load', renderAllFunction)

  const DOMReady = function (callback) {
    document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback)
  }

  DOMReady(function () {
    if (typeof (Storage) !== 'undefined') {
      renderAllFunction()
    } else {
      alert('Browser kamu tidak mendukung local storage')
    }
  })
}

export { main }
