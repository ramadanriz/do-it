/* eslint-disable valid-typeof */
function crudTodo () {
  const todos = []
  const TODOS_LOCAL_STORAGE = 'TODOS_LOCAL_STORAGE'
  const checkingStorage = typeof (Storage)

  const generateTodoElement = (todoObject) => {
    const inputNewTaskElement = document.createElement('input')
    inputNewTaskElement.setAttribute('id', 'new-task')
    inputNewTaskElement.classList.add('input-new-task', 'mb-0')
    inputNewTaskElement.setAttribute('value', `${todoObject.task}`)

    const todoTitleElement = document.createElement('p')
    todoTitleElement.classList.add('mb-0')
    todoTitleElement.innerText = todoObject.task

    const labelElement = document.createElement('label')
    labelElement.setAttribute('for', `task-${todoObject.id}`)
    labelElement.classList.add('task-label')
    labelElement.innerHTML = '<span>&#10004;</span>'
    labelElement.append(todoTitleElement)

    const checkBoxElement = document.createElement('input')
    checkBoxElement.setAttribute('class', 'task-checkbox')
    checkBoxElement.setAttribute('id', `task-${todoObject.id}`)
    checkBoxElement.setAttribute('type', 'checkbox')

    const todoCardLeftSection = document.createElement('div')
    todoCardLeftSection.setAttribute('class', 'todo-card-left-section d-flex align-items-center w-75')
    todoCardLeftSection.append(checkBoxElement, labelElement)

    const todoCard = document.createElement('div')
    todoCard.classList.add('todo-card', 'p-3', 'd-flex', 'my-4')

    const editTodoIcon = document.createElement('ion-icon')
    editTodoIcon.setAttribute('name', 'create-outline')

    const saveTodoIcon = document.createElement('ion-icon')
    saveTodoIcon.setAttribute('name', 'save-outline')

    const deleteTodoIcon = document.createElement('ion-icon')
    deleteTodoIcon.setAttribute('name', 'trash-outline')

    const editTodoBtn = document.createElement('button')
    editTodoBtn.setAttribute('class', 'todo-card-edit-btn me-2 d-flex align-items-center')
    editTodoBtn.append(editTodoIcon)
    editTodoBtn.addEventListener('click', function () {
      const todoTarget = findTodo(todoObject.id)

      if (todoTarget == null) {
        return
      }

      labelElement.replaceChild(inputNewTaskElement, todoTitleElement)
      // todoTitleElement.innerHTML = `<input id="new-task" class="input-new-task mb-0" value="${todoObject.task}">`
      todoCardRightSection.replaceChild(saveTodoBtn, editTodoBtn)
    })

    const saveTodoBtn = document.createElement('button')
    saveTodoBtn.setAttribute('class', 'todo-card-edit-btn me-2 d-flex align-items-center')
    saveTodoBtn.append(saveTodoIcon)
    saveTodoBtn.addEventListener('click', function () {
      const todoTarget = findTodoIndex(todoObject.id)

      if (todoTarget === -1) {
        return
      }

      todos[todoTarget].task = document.getElementById('new-task').value
      todoTitleElement.innerHTML = `<p class="mb-0">${todos[todoTarget].task}</p>`
      todoCardRightSection.replaceChild(editTodoBtn, saveTodoBtn)
      todos.splice(todoTarget, 1, todoObject)

      saveData()
      const todoListContainer = document.querySelector('.todo-list-container')
      todoListContainer.innerHTML = ''
      for (const todoItem of todos) {
        const newTodo = generateTodoElement(todoItem)
        todoListContainer.append(newTodo)
      }
    })

    const deleteTodoBtn = document.createElement('button')
    deleteTodoBtn.setAttribute('class', 'todo-card-delete-btn d-flex align-items-center')
    deleteTodoBtn.append(deleteTodoIcon)
    deleteTodoBtn.addEventListener('click', function () {
      removeTodo(todoObject.id)
    })

    const todoCardRightSection = document.createElement('div')
    todoCardRightSection.setAttribute('class', 'todo-card-right-section d-flex justify-content-end align-items-center w-25')
    todoCardRightSection.append(editTodoBtn, deleteTodoBtn)

    todoCard.append(todoCardLeftSection, todoCardRightSection)

    return todoCard
  }

  const DOMReady = function (callback) {
    document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback)
  }

  DOMReady(function () {
    const addTodoForm = document.getElementById('add-todo-form')
    addTodoForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const todoId = +new Date()
      const todoTitle = document.getElementById('todo-title-input').value

      const generateTodoObject = () => {
        return {
          id: todoId,
          task: todoTitle
        }
      }

      const todoObject = generateTodoObject()

      todos.push(todoObject)
      saveData()
      const todoListContainer = document.querySelector('.todo-list-container')
      todoListContainer.innerHTML = ''
      for (const todoItem of todos) {
        const newTodo = generateTodoElement(todoItem)
        todoListContainer.append(newTodo)
      }

      document.getElementById('todo-title-input').value = null
    })

    if (checkingStorage) {
      loadDataFromStorage()
    } else {
      alert('Browser kamu tidak mendukung local storage')
    }
  })

  function findTodoIndex (todoId) {
    for (const index in todos) {
      if (todos[index].id === todoId) {
        return index
      }
    }

    return -1
  }

  function findTodo (todoId) {
    for (const todoItem of todos) {
      if (todoItem.id === todoId) {
        return todoItem
      }
    }
    return null
  }

  function removeTodo (todoId) {
    const todoTarget = findTodoIndex(todoId)

    if (todoTarget === -1) {
      return
    }

    todos.splice(todoTarget, 1)

    const todoListContainer = document.querySelector('.todo-list-container')
    todoListContainer.innerHTML = ''

    for (const todoItem of todos) {
      const newTodo = generateTodoElement(todoItem)
      todoListContainer.append(newTodo)
    }

    saveData()
  }

  function saveData () {
    if (checkingStorage) {
      const parsed = JSON.stringify(todos)
      localStorage.setItem(TODOS_LOCAL_STORAGE, parsed)
    } else {
      alert('Browser kamu tidak mendukung local storage')
    }
  }

  function loadDataFromStorage () {
    const serializedData = localStorage.getItem(TODOS_LOCAL_STORAGE)

    const data = JSON.parse(serializedData)

    if (data !== null) {
      for (const todo of data) {
        todos.push(todo)
      }
    }

    const todoListContainer = document.querySelector('.todo-list-container')
    todoListContainer.innerHTML = ''

    for (const todoItem of todos) {
      const newTodo = generateTodoElement(todoItem)
      todoListContainer.append(newTodo)
    }
  }
}

export default crudTodo
