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
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h3 class="text-center text-altblack fw-bold">Mengapa Harus Punya 'Goals' Dalam Hidup?</h3>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <img src="question-man.jpg" class="img-fluid" alt="Confused business character making important decision">
          </div>
          <div class="col-lg-6 align-self-center">
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

export { heroTemplate, sectionFirst, sectionDailyMotivation }
