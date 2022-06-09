const heroTemplate = () => `
  <section class="hero">
    <div class="container-fluid px-4 py-5 bg-altgray">
      <div class="row flex-lg-row-reverse">
        <div class="col-lg-6">
          <img src="heroes-image.png" class="d-block mx-lg-auto img-fluid" alt="man casual using laptop" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6 align-self-center">
          <h1 class="fw-bold lh-sm my-3 text-altblack">Capai Goals dan Kelola Tugas Harian Anda</h1>
          <p class="lead mb-3">Do.it siap memfasilitasi anda agar dapat mengelola semua tugas harian dengan gampang, juga tetap fokus serta konsisten dalam proses mencapai goalsnya.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a class="btn btn-altblue btn-lg px-4 me-md-2" href="#/todo" role="button">Try it now</a>
          </div>
        </div>
      </div>
    </div>
  <section>
`

const sectionFirst = () => `
  <section class="section-first my-5">
      <div class="container mx-auto">
        <div class="row">
          <div class="col py-3">
            <h3 class="text-center text-altblack fw-bold">Mengapa Harus Punya 'Goals' Dalam Hidup?</h3>
          </div>
        </div>
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5">
            <img src="confused-character.png" class="img-fluid" alt="Confused business character making important decision">
          </div>
          <div class="col-lg-7">
            <p class="lh-lg">"Goals" adalah sesuatu yang ingin kita capai atau peroleh. Tanpanya hidup akan berputar tanpa arah dan tujuan hidup tak akan jelas. Tanpa "Goals" hidup kita layaknya sebuah perjalanan tanpa sebuah peta dan alamat. Kita terus berputar mencari sesuatu yang tak jelas dan terjebak dalam rute yang sama tanpa kejelasan. "Goals" adalah sebuah tujuan yang kita tetapkan. Dengan adanya "Goals" kita tahu ke arah mana harus melangkah. "Goals" akan berfungsi sebagai kompas untuk menuju ke tempat yang kita inginkan.</p>
          </div>
        </div>
      </div>
  <section>
`

const sectionDailyMotivation = () => `
  <section class="quotes bg-altgray p-5">
    <div class="content quote-container">
      <div class="bingkai-section d-flex justify-content-center align-items-center">
        <div>
          <button type="button" class="generateQuote"><ion-icon class="next-back-icon" name="chevron-back-outline"></ion-icon></button>
        </div>
        <img src="quote.png" alt="bingkai quote">
        <div>
          <button type="button" class="generateQuote"><ion-icon class="next-back-icon" name="chevron-forward-outline"></ion-icon></button>
        </div>
      </div>

      <div class="quote-section">
        <div class="text-center">
          <span class="quote"></span>
        </div>
        <div class="author">
          <span>-</span>
          <span class="name"></span>
        </div>
      </div>
    </div>
  </section>
`

const sectionThird = () => `
  <section class="section-third my-5">
    <div class="container mx-auto">
      <div class="row">
        <div class="col py-3 text-center">
          <h3 class="text-altblack fw-bold">Panduan Dalam Menetapkan Goals</h3>
          <span>Sumber: There is a S.M.A.R.T Way to Write Management’s Goals and Objective (George T. Doran, 1981)</span>
        </div>
      </div>
      <div class="row justify-content-between align-items-center flex-row-reverse">
        <div class="col-lg-5">
          <img src="woman-checking.png" class="img-fluid" alt="woman checking giant check list">
        </div>
        <div class="col-lg-7">
          <ol class="list-group list-group-numbered list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Specific (spesifik)</div>
                "Goals" harus spesifik menunjukkan apa yang harus dilakukan disertai prosedur pencapaian, dan hasil yang diharapkan.
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Measurable (terukur)</div>
                "Goals" yang ditetapkan harus dapat diukur baik secara kuantitatif dan kualitatif.
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Achievable (dapat dicapai)</div>
                "Goals" yang dibuat harus bisa di kerjakan oleh individual maupun grup.
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Relevant (relevan)</div>
                Pastikan "Goals" yang ingin dicapai selaras dengan misi perusahaan.
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Time-bound goals (tepat waktu)</div>
                Pencapaian "Goals" harus tetap dan dalam kurun waktu yang telah ditentukan.
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  <section>
`

const aboutPageTemplate = () => `
<div class="container-fluid px-4 py-5">
  <div class="row flex-lg-row">
    <div class="col-lg-6">
      <img src="logo/do-it-logoo.png" class="d-block mx-lg-auto img-fluid img-thumbnail p-4 shadow p-3 mb-5 bg-body rounded" alt="do.it logo" loading="lazy">
    </div>
    <div class="col-lg-6">
      <h2 class="fw-bold lh-sm text-altblack">Tentang Do.it</h2>
      <p class="lead">Do.it merupakan aplikasi productivity berbasis website yang mengimplementasikan responsive web design dan progressive web apps sehingga dapat diakses melalui perangkat desktop maupun mobile. Kami mencoba menggabungkan beberapa fitur dari berbagai aplikasi productivity sejenis, seperti fitur membuat goals, focus timer, daily report, dan daily motivation.</p>
    </div>
  </div>
</div>
  <div class="container-fluid mx-auto">
    <h2 class="fw-bold mb-2 text-center text-altblack py-5">Tim Kami</h2>
    <div class="row pb-5 mb-4" id="team-list">
    </div>
  </div>
`

const timerPageTemplate = () => `
  <div class="pomodoro-container">
    <h1 >Focus Timer</h1>
    <div id="countdown-container">
      <div id="time">
        <span id="minutes">25</span>
        <span id="colon">:</span>
        <span id="seconds">00</span>
      </div>
    </div>
    <div id="button-container">
        <button type="button" id="start-session">Start</button>
        <button type="button" id="stop-session">Stop</button>
    </div>
  </div>
`

const todoPageTemplate = () => `
  <div class="todopage-container m-5 mx-lg-2">
    <div class="mx-0 mx-md-5">
      <div class="row my-3">
        <div class="pb-3 py-md-0 col-md">
          <div class="p-3 bg-satu shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                  <h3 class="fs-2" id="total-goals"></h3>
                  <p class="fs-5">Total Goals</p>
              </div>
              <ion-icon name="today" class="logo p-3" size="large"></ion-icon>
          </div>
        </div>

        <div class="col-md">
          <div class="p-3 bg-dua shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                  <h3 class="fs-2" id="total-todo"></h3>
                  <p class="fs-5 text-break">Total Todo pada Goals</p>
              </div>
              <ion-icon name="newspaper" class="logo p-3" size="large"></ion-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5 mx-sm-2 mx-md-5">
      <div class="col-lg-8 col-md-12 p-4 p-sm-5 p-lg-4 p-xl-5 border rounded">
        <div class="">
          <form class="row mb-4" id="addNewTodoForm">
            <div class="col-md-3 col-sm-12 px-0">
              <select class="form-select" id="addNewTodoSelect" required>
                <option value="">Pilih Goals</option>
              </select>
            </div>
            <div class="input-todo col-md-7 col-sm-9 py-3 px-0 ps-sm-0 pt-sm-3 py-sm-0 pe-sm-2 pt-md-0 ps-md-3">
              <input type="text" class="form-control" placeholder="Tambahkan kegiatan anda" id="addNewTodoInput" autocomplete="off" required>
            </div>
            <div class="col-md-2 col-sm-3 pt-sm-3 pt-md-0 px-0">
              <button class="todo-btn submit-todo-btn w-100 py-2 py-sm-0">Simpan</button>
            </div>
          </form>
          <form class="row mb-4" id="editTodoForm">
            <div class="col-md-3 px-0">
              <select class="form-select" id="editTodoSelect">
                <option value="">Pilih Goals</option>
              </select>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Tambahkan kegiatan anda" id="editTodoInput" autocomplete="off" required>
            </div>
            <div class="col-md-3 px-0">
              <button class="todo-btn submit-todo-btn">Simpan Perubahan</button>
            </div>
          </form>
        </div>

        <div class="row">
          <div class="col-lg-4 p-3 border rounded">
            <h5 class="mb-3">Daftar Goals</h5>
            <ul class="list-group list-group-light sidebar-list" id="goalsList"></ul>
          </div>

          <div class="col-lg-8 py-3 px-0 px-sm-0">
            <h5 class="mb-3 mx-3">Daftar Kegiatan</h5>
            <div class="row row-cols-1 mx-3" id="todoList"></div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 ps-0 mt-5 pe-0 ps-lg-3 ps-xl-4 ps-xxl-5 mt-lg-0">
        <div class="todo-container">
          <div class="add-todo-form-container">
            <h3 class="d-flex align-items-center mb-3">Tugas hari ini</h3>
            <form class="d-flex" id="add-todo-form" autocomplete="off">
                <div class="input-todo w-75 px-0 me-2">
                    <input type="text" class="form-control" id="todo-title-input" placeholder="Masukkan nama tugas" required>
                </div>
                <div class="w-25">
                    <button type="submit" id="submit-todo-btn" class="todo-btn submit-todo-btn d-flex align-items-center justify-content-center">
                        <ion-icon class="me-1" name="add-circle"></ion-icon> Tugas
                    </button>
                </div>
            </form>
          </div>

          <div class="todo-list-container mt-5"></div>
        </div>
      </div>
    </div>

    <div class="fixed-bottom">
      <button type="button" data-bs-toggle="modal" data-bs-target="#addGoals" id="addGoalsButton"><ion-icon name="add-circle"></ion-icon></button>
    </div>
  </div>

  <div class="modal fade" id="addGoals" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addGoalsLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addGoalsLabel">Tambah Goals</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="addNewGolasForm">
                    <div class="mb-3">
                        <label for="goalsName" class="form-label">Nama Goals</label>
                        <input type="text" class="form-control" placeholder="Tambahkan goals anda" id="addNewGoalsInput" autocomplete="off" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </form>
            </div>
        </div>
    </div>
  </div>
`

export { heroTemplate, sectionFirst, sectionDailyMotivation, sectionThird, aboutPageTemplate, timerPageTemplate, todoPageTemplate }
