import crudTodo from "../../utils/crud-todo";

const TodoPage = {
  async render () {
    return `
      <div class="todo-container w-50">
          <div class="d-flex justify-content-between">
              <h3 class="d-flex align-items-center mb-0">Tugas hari ini</h3>

              <button type="button" class="todo-btn add-todo-btn d-flex align-items-center justify-content-center px-3 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <ion-icon class="me-2" name="add-circle"></ion-icon> Buat tugas
              </button>
          </div>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-body p-4">
                          <form id="add-todo-form" autocomplete="off">
                              <div class="input-todo mb-4">
                                  <input type="text" class="form-control" id="todo--title-input" placeholder="Masukkan nama tugas" required>
                                  <!-- <div class="form-text">catatan: masukkan nama tugas secara jelas dan spesifik</div> -->
                              </div>
                              <div class="d-flex justify-content-end">
                                  <button type="submit" class="todo-btn submit-todo-btn px-3 py-2">Submit</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>

          <div class="todo-list-container mt-5">
              <div class="todo-card p-3 d-flex my-4">
                  <div class="todo-card-left-section d-flex align-items-center w-75">
                      <input class="task-checkbox" id="task-checkbox" type="checkbox">
                      <label for="task-checkbox">
                          <span>&#10004;</span>
                          <p class="mb-0">Membeli bahan makanan buat sahur dan berkelana kesini kemari tanpa ada rasa ampun djhsjdhsjfhdjkshfkj
                              dshfjkd shfjkhdsjkfhjkd hfjkdshfjk dhsjkfhd
                              jkshfjkdshfjkd shjkfhdsjkfhjkdsh fjkdsh
                              fjkdhsjkfhdsj khfj kdshfjkdsh jkfhdskjhfjkdsh</p>
                      </label>
                  </div>
                  <div class="todo-card-right-section d-flex justify-content-end align-items-center w-25">
                      <button class="todo-card-edit-btn me-2 d-flex align-items-center">
                          <ion-icon name="create-outline"></ion-icon>
                      </button>
                      <button class="todo-card-delete-btn d-flex align-items-center">
                          <ion-icon name="trash-outline" aria-label="delete"></ion-icon>
                      </button>
                  </div>
              </div>

              <div class="todo-card p-3 d-flex my-4">
                  <div class="todo-card-left-section d-flex align-items-center w-75">
                      <input class="task-checkbox" id="task-checkbox2" type="checkbox">
                      <label for="task-checkbox2">
                          <span>&#10004;</span>
                          <p class="mb-0">Membeli bahan makanan buat sahur</p>
                      </label>
                  </div>
                  <div class="todo-card-right-section d-flex justify-content-end align-items-center w-25">
                      <button class="todo-card-edit-btn me-2 d-flex align-items-center">
                          <ion-icon name="create-outline"></ion-icon>
                      </button>
                      <button class="todo-card-delete-btn d-flex align-items-center">
                          <ion-icon name="trash-outline" aria-label="delete"></ion-icon>
                      </button>
                  </div>
              </div>

              <div class="todo-card p-3 d-flex my-4">
                  <div class="todo-card-left-section d-flex align-items-center w-75">
                      <input class="task-checkbox" id="task-checkbox3" type="checkbox">
                      <label for="task-checkbox3">
                          <span>&#10004;</span>
                          <p class="mb-0">Membeli bahan makanan buat sahur</p>
                      </label>
                  </div>
                  <div class="todo-card-right-section d-flex justify-content-end align-items-center w-25">
                      <button class="todo-card-edit-btn me-2 d-flex align-items-center">
                          <ion-icon name="create-outline"></ion-icon>
                      </button>
                      <button class="todo-card-delete-btn d-flex align-items-center">
                          <ion-icon name="trash-outline" aria-label="delete"></ion-icon>
                      </button>
                  </div>
              </div>
          </div>
      </div>
    `
  },

  async afterRender () {
    crudTodo;
    console.log(crudTodo);
  }
}

export default TodoPage