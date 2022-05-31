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
  <section class="quotes my-5 bg-altgray">
      <div class="wrapper">
      <h1>Quote of the Day</h1>
      <div class="content">
        <div class="quote-area">
          <p class="quote"></p>
        </div>
        <div class="author">
          <span>__</span>
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
      <div class="row justify-content-between align-items-center">
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
      <img src="logo/do-it-logo.png" class="d-block mx-lg-auto img-fluid img-thumbnail p-4 shadow p-3 mb-5 bg-body rounded" alt="do.it logo" loading="lazy">
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
    <div class="length-container">
        <div id="focusLength-container" class="toggle-button-container">
            <h1>Focus Length</h1>
            <time id="focus-length" class="toggle-button-container__sub-container"></time>
            <div class="toggler-button">
                <button class="toggle-timer" type="button" id="decrease-focus">-</button> 
                <button class="toggle-timer" type="button" id="increase-focus">+</button> 
            </div>
        </div>
        <div id="breakLength-container" class="toggle-button-container">
            <h1>Break Length</h1>
            <time id="break-length" class="toggle-button-container__sub-container"></time>
            <div class="toggler-button">
                <button class="toggle-timer" type="button" id="decrease-break">-</button>
                <button class="toggle-timer" type="button" id="increase-break">+</button>
            </div>
        </div>
    </div>
    <div id="countdown-container">
        <h1 id="type">Focus Session</h1>
        <time id="countdown"></time>
    </div>
    <div id="button-container">
        <button type="button" id="start-session">Start</button>
        <button type="button" id="stop-session">Stop</button>
        <button type="button" id="reset-session">Reset</button>
    </div>
  </div>
`

const todoPageTemplate = () => `
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div class="d-flex align-items-center">
            <h2 class="fs-2 m-0">Todo Apps</h2>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row g-3 my-2">
            <div class="col-md">
                <div class="p-3 bg-satu shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 class="fs-2">20</h3>
                        <p class="fs-5">Total Goals</p>
                    </div>
                    <ion-icon name="today" class="logo p-3"></ion-icon>
                </div>
            </div>

            <div class="col-md">
                <div class="p-3 bg-dua shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 class="fs-2">15</h3>
                        <p class="fs-5 text-break">Goals in Progress</p>
                    </div>
                    <ion-icon name="newspaper" class="logo p-3"></ion-icon>
                </div>
            </div>

            <div class="col-md">
                <div class="p-3 bg-tiga shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 class="fs-2">5</h3>
                        <p class="fs-5">Goals Completed</p>
                    </div>
                    <ion-icon name="checkmark-done-circle" class="logo p-3"></ion-icon>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid py-5">
        <div class="row g-3 d-flex justify-content-between">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body p-5">
                        <h6 class="mb-3">Tambahkan kegiatanmu hari ini</h6>
                        <form class="d-flex justify-content-center align-items-center mb-4">
                            <div class="form-outline flex-fill">
                                <input type="text" id="form3" class="form-control" />
                            </div>
                            <button type="submit" class="btn btn-primary ms-2">Tambah</button>
                        </form>        
                        <ul class="list-group mb-0">
                            <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                                <div class="d-flex align-items-center">
                                    <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />Makan
                                </div>
                                <a href="#!" data-mdb-toggle="tooltip" title="Remove item"><ion-icon name="close-outline"></ion-icon></a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                                <div class="d-flex align-items-center">
                                    <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />Minum
                                </div>
                                <a href="#!" data-mdb-toggle="tooltip" title="Remove item"><ion-icon name="close-outline"></ion-icon></a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                                <div class="d-flex align-items-center">
                                    <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />Tidur
                                </div>
                                <a href="#!" data-mdb-toggle="tooltip" title="Remove item"><ion-icon name="close-outline"></ion-icon></a>
                            </li>
                        </ul>
                    </div>
                </div>        
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body p-3">
                        <h3 class="mb-3">Goals yang akan dicapai</h3>
                        <div class="row g-3">
                            <div class="col-sm-6">                                        
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Menyelesaikan program kampus merdeka</h5>
                                        <ol class="list-group list-group-flush">
                                            <li class="list-group-item d-flex justify-content-between align-items-center">Daftar <button type="button"><ion-icon name="add-circle-outline"></ion-icon></button></li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">Mengikuti progam <button type="button"><ion-icon name="add-circle-outline"></ion-icon></button></li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">Lulus <button type="button"><ion-icon name="add-circle-outline"></ion-icon></button></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Juara piala dunia bersama timnas</h5>
                                        <ol class="list-group list-group-flush">
                                            <li class="list-group-item d-flex justify-content-between align-items-center">Daftar <button type="button"><ion-icon name="add-circle-outline"></ion-icon></button></li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">Mengikuti progam <button type="button"><ion-icon name="add-circle-outline"></ion-icon></button></li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">Lulus <button type="button"><ion-icon name="add-circle-outline"></ion-icon></button></li>
                                        </ol>                                      
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Juara piala dunia bersama timnas</h5>
                                        <ol class="list-group list-group-flush">
                                            <li class="list-group-item d-flex justify-content-between align-items-center">Daftar <button type="button"><ion-icon name="add-circle-outline"></ion-icon></button></li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">Mengikuti progam <button type="button"><ion-icon name="add-circle-outline"></ion-icon></button></li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">Lulus <button type="button"><ion-icon name="add-circle-outline"></ion-icon></button></li>
                                        </ol>                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    <!-- Button trigger modal -->
    <div class="fixed-bottom">
    <button type="button" data-bs-toggle="modal" data-bs-target="#addGoals" id="addGoalsButton"><ion-icon name="add-circle"></ion-icon></button>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="addGoals" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addGoalsLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="addGoalsLabel">Tambah Goals</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
                <div class="mb-3">
                  <label for="goalsName" class="form-label">Nama Goals</label>
                  <input type="text" class="form-control" id="goalsName" aria-describedby="goalsNameHelp">
                  <div id="goalsNameHelp" class="form-text">Tambahkan nama goals anda.</div>
                </div>
                <button type="submit" class="btn btn-primary">Simpan</button>
              </form>
        </div>
    </div>
    </div>
  </div>
`

export { heroTemplate, sectionFirst, sectionDailyMotivation, sectionThird, aboutPageTemplate, timerPageTemplate, todoPageTemplate }
