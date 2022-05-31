class AppFooter extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <section class="d-flex justify-content-between p-4 bg-altviolet">
            <div class="me-5">
                <span>Mari terhubung dengan kami di:</span>
            </div>
            <div>
                <a href="" class="text-white me-4"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="" class="text-white me-4"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="" class="text-white me-4"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="" class="text-white me-4"><ion-icon name="logo-github"></ion-icon></a>
            </div>
        </section>

        <section>
            <div class="container-fluid text-center text-md-start mt-5 text-altblack">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold">DO.IT</h6>
                        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
                        <p>Do.it siap memfasilitasi anda agar dapat mengelola semua tugas harian dengan gampang, juga tetap fokus serta konsisten dalam proses mencapai goalsnya.</p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold">Layanan Kami</h6>
                        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
                        <p><a href="#/todo" class="text-altblack">Todo Apps</a></p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold">Kantor Kami</h6>
                        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
                        <p><ion-icon name="location" size="small"></ion-icon> Jl. Raya Kayen No. 56, Kayangan, Diwek, Jombang</p>
                        
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold">Pusat Bantuan</h6>
                        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
                        <p><ion-icon name="mail" size="small"></ion-icon> info@example.com</p>
                        <p><ion-icon name="call" size="small"></ion-icon> + 01 234 567 88</p>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="text-center p-3 bg-altpurple text-altblack">
            Copyright © 2022 do.it.
        </div>
    `
  }
}

customElements.define('app-footer', AppFooter)
