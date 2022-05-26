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
  <div class="container-fluid mx-auto">
    <h2 class="fw-bold mb-2 text-center text-altblack py-5">Tim Kami</h2>
    <div class="row pb-5 mb-4">
      <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
        
        <div class="card shadow-sm border-0 rounded">
          <div class="card-body p-0"><img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500" alt="" class="w-100 card-img-top">
            <div class="p-4">
              <h5 class="mb-0">Dwiky Darmawansyah</h5>
              <p class="small text-muted">Web Developer</p>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-twitter" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-instagram" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-github" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-linkedin" size="small"></ion-icon></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <!-- Card-->
        <div class="card shadow-sm border-0 rounded">
          <div class="card-body p-0"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500" alt="" class="w-100 card-img-top">
            <div class="p-4">
              <h5 class="mb-0">Faiz Fachrudin</h5>
              <p class="small text-muted">Web Developer</p>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-twitter" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-instagram" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-github" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-linkedin" size="small"></ion-icon></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <!-- Card-->
        <div class="card shadow-sm border-0 rounded">
          <div class="card-body p-0"><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500" alt="" class="w-100 card-img-top">
            <div class="p-4">
              <h5 class="mb-0">Rio Ramadhan Bahtiar</h5>
              <p class="small text-muted">Web Developer</p>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-twitter" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-instagram" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-github" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-linkedin" size="small"></ion-icon></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <!-- Card-->
        <div class="card shadow-sm border-0 rounded">
          <div class="card-body p-0"><img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500" alt="" class="w-100 card-img-top">
            <div class="p-4">
              <h5 class="mb-0">Rizky Ramadhani</h5>
              <p class="small text-muted">Web Developer</p>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-twitter" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-instagram" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-github" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="#" class="social-link"><ion-icon name="logo-linkedin" size="small"></ion-icon></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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

export { heroTemplate, sectionFirst, sectionDailyMotivation, sectionThird, aboutPageTemplate, timerPageTemplate }
