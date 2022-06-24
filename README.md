# Do.it

**Do.it** - Aplikasi pengelola goals dan kegiatan harian.

## Sekilas

![image.png](https://github.com/ramadanriz/do-it/blob/677ab9c4b3df9767664ea6cb17f4863506a28387/readme%20image/homepage.PNG)

Web app ini dibangun secara progressive dengan menerapkan sifat offline capability dan installable. Berikut teknologi yang digunakan selama proses pengembangan;

1. ESLint sebagai linter ketika menuliskan kode JavaScript
2. Menggunakan arsitektur Application Shell dalam pembuatan website
3. Menerapkan Web App Manifest dan Service Worker
4. Menerapkan Cache API pada Service Worker
5. Menggunakan local storage sebagai media penyimpanan data
6. Serta menerapkan Notification

## Scripts

*Script* `npm` yang digunakan dalam *project* ini adalah sebagai berikut:

1. Starting development server

   `npm run start-dev`

2. Build untuk distribusi production

   `npm run build`

## Fitur

### Daily Motivation

![image.png](https://github.com/ramadanriz/do-it/blob/74fb5a2f4ea170a780fa81c5bb43acf9fa7c2be6/readme%20image/daily_motivation%20(1).png)
![image.png](https://github.com/ramadanriz/do-it/blob/74fb5a2f4ea170a780fa81c5bb43acf9fa7c2be6/readme%20image/daily_motivation_2%20(1).png)

Fitur ini tersedia pada halaman beranda (homepage). Fitur ini dimaksudkan agar pengguna menjadi lebih termotivasi dalam menyelesaikan setiap kegiatannya dan bisa mencapai goalsnya tepat waktu. Selain pada homepage, fitur ini juga tersedia pada halaman todo yang berupa notifikasi. Jadi ketika pengguna membuka halaman todo, makan akan muncul notifikasi yang isinya berupa quotes.

### Daily Report

![image.png](https://github.com/ramadanriz/do-it/blob/cb7a7f12b02c337ba76b746500b66c39f7f4a2da/readme%20image/report_1%20(1).png)
![image.png](https://github.com/ramadanriz/do-it/blob/cb7a7f12b02c337ba76b746500b66c39f7f4a2da/readme%20image/report_2%20(1).png)

Fitur ini akan menampilkan semua goals, kegiatan goals, serta kegiatan harian. Dengan adanya fitur ini diharapkan pengguna bisa dengan mudah mengetahui apa saja goals dan kegiatan yang harus diselesaikan. Setiap pengguna menambahkan atau menghapus goals dan todo, fitur ini akan mengupdate tampilannya.

### Goals & Todo

Fitur ini ditujukan untuk mengelola goals dan kegiatan pengguna. Berikut adalah tata cara penggunaan fitur goals & todo:
1. Untuk menambahkan goals baru, tekan tombol `+` di pojok kanan bawah. Kemudian akan muncul form untuk mengisi nama goals.
<p align="center">
   <img src="https://github.com/ramadanriz/do-it/blob/0b9752a2c80fbf1ad1d8b694ca5f262e3aedcbd9/readme%20image/goals_1.png">
   <img src="https://github.com/ramadanriz/do-it/blob/0b9752a2c80fbf1ad1d8b694ca5f262e3aedcbd9/readme%20image/goals_2.png">
</p>

2. Setelah memiliki goals yang ingin dicapai, saatnya menambahkan aksi untuk mencapainya. Untuk menambahkan kegiatan pada goals, pilih terlebih dahulu goalsnya kemudian isi form kegiatan yang ada disampingnya. Setelah klik tombol `simpan`, pengguna bisa melihat daftar kegiatan dengan klik `nama goals` pada daftar goals. Pengguna juga dapat menghapus goals dengan klik logo `tong sampah`.
<p align="center">
   <img src="https://github.com/ramadanriz/do-it/blob/4bcd2718a46dffcae8d365939855231edaa63e30/readme%20image/goals_5.png">
   <img src="https://github.com/ramadanriz/do-it/blob/4bcd2718a46dffcae8d365939855231edaa63e30/readme%20image/goals_6%20(1).png">
</p>

Pada setiap kegiatan, terdapat 3 fungsionalitas yaitu:<br>
   * Tombol Selesai. Tombol ini bisa digunakan untuk menandai bahwa sebuah kegiatan telah selesai dilaksanakan. Setelah tombol ini ditekan, maka nama kegiatan akan otomatis tercoret.
   <p align="center">
      <img src="https://github.com/ramadanriz/do-it/blob/59edbfac58f451f2dd9b161fd200214bf93c62a0/readme%20image/goals_8.PNG">
   </p>
   
   * Tombol Edit. Setelah menekan tombol ini, pengguna bisa mengganti nama kegiatan pada form yang sama saat menambahkan kegiatan baru
   <p align="center">
      <img src="https://github.com/ramadanriz/do-it/blob/1efdc29a3ce411f6fd97e94e20a1282e7821b44f/readme%20image/goals_9.png">
   </p>
   
   * Tombol Hapus. Sebelum pengguna benar-benar akan menghapus kegiatan, akan muncul pop-up konfirmasi.
   <p align="center">
      <img src="https://github.com/ramadanriz/do-it/blob/ed9853348c8cd668e9473f40a75e4c27ab50c282/readme%20image/goals_11.png">
   </p>
   
3. Jika pengguna hanya ingin membuat daftar kegiatan harian tanpa adanya goals tertentu, bisa menggunakan fitur daily todo yang berada di sebelah kanan. Setiap nama kegiatan memiliki 3 fungsionalitas yang sama seperti goals todo, yaitu tombol selesai, tombol edit, dan tombol hapus.
      <p align="center">
         <img src="https://github.com/ramadanriz/do-it/blob/ed9853348c8cd668e9473f40a75e4c27ab50c282/readme%20image/daily_todo_1.PNG">
      </p>

### Focus Timer

<p align="center">
   <img src="https://github.com/ramadanriz/do-it/blob/d883556f0f3cd894a5a7595840578ddc8fd40b67/readme%20image/timer_1%20(1).png">
   <img src="https://github.com/ramadanriz/do-it/blob/d883556f0f3cd894a5a7595840578ddc8fd40b67/readme%20image/timer_2%20(1).png">
   <img src="https://github.com/ramadanriz/do-it/blob/d883556f0f3cd894a5a7595840578ddc8fd40b67/readme%20image/timer_4%20(1).png">
</p>

Focus timer dibuat berdasarkan teknik pomodoro, dimanan idenya adalah kita melakukan sebuah tugas atau pekerjaan harus fokus secara maksimal dalam jangka waktu yang disediakan. Secara default, waktu yang disediakan adalah 25 menit. Berikut fungsionalitas pada fitur focus timer:

1. Tombol `start` digunakan untuk memulai hitung mundur waktu
2. Saat waktu sedang berjalan tombol `stop` dan `setting` akan dinonaktifkan
3. Ketika waktu telah selesai, maka background akan berubah warna serta alarm akan berbunyi
4. Tombol `stop` digunakan untuk menghentikan waktu yang sedang berjalan. Selain itu juga digunakan untuk mematikan suara alarm ketika waktu telah selesai
5. Tombol `setting` digunakan untuk melakukan kustomisasi pada waktu.

![image.png](https://github.com/ramadanriz/do-it/blob/fd00e7a4f4648b34e73c5cf438af08daa5cf482b/readme%20image/timer_3.PNG)

Jika waktu default yang disediakan dirasa kurang atau terlalu lama, pengguna bisa melakukan kustomisasi dengan memanfaatkan tombol `setting` yang tersedia. Makan akan muncul form untuk mengisi lamanya waktu yang diinginkan.

## Tools & Resources

- [Balsamiq Mockup](https://balsamiq.com/wireframes/) - Membuat mockup
- [Postman](https://www.postman.com/) - Menguji API quotes
- [Quotable](https://github.com/lukePeavey/quotable) - Quotes API untuk fitur daily motivation
- [NPM](https://www.npmjs.com/) - Pengelolaan module/package pada proyek
- [Webpack](https://webpack.js.org/) - Module bundler
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [SweetAlert](https://sweetalert2.github.io/) - Kustomisasi pop-up dan alert
- [FontAwesome](https://fontawesome.com/) - Sumber icon gratis
- [Google Fonts](https://fonts.google.com/) - Font modern dan menarik
- [Freepik](https://www.freepik.com/) - Sumber gambar gratis
- [Canva](https://www.canva.com/) - Membuat slide presentasi
- [Pixabay](https://pixabay.com/) - Sumber audio untuk alarm timer

## Tim Kami

### CPSG-35
1. F2299A280 - Rio Ramadhan Bahtiar
2. F2393A396 - Faiz Fachrudin 
3. F2168E127 - Dwiky Darmawansyah
4. F2209A174 - Rizky Ramadhani
