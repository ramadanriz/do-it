# Do.it

**Do.it** - Aplikasi pengelola goals dan kegiatan harian.

## Sekilas

![image.png](https://github.com/ramadanriz/do-it/blob/677ab9c4b3df9767664ea6cb17f4863506a28387/readme%20image/homepage.PNG)

Web app ini dibangun secara progressive dengan menerapkan sifat offline capability dan installable. Berikut teknologi yang digunakan selama proses pengembangan;

1. ESLint sebagai linter ketika menuliskan kode JavaScript
2. Menggunakan arsitektur Application Shell dalam pembuatan website
3. Menerapkan Web App Manifest dan Service Worker
4. Menerapkan Cache API pada Service Worker
5. Serta menerapkan Notification

## Scripts

*Script* `npm` yang digunakan dalam *project* ini adalah sebagai berikut:

1. Starting development server

   `npm run start-dev`

2. Build untuk distribusi production

   `npm run build`

## Fitur

### Daily Motivation

![image.png](https://github.com/ramadanriz/do-it/blob/677ab9c4b3df9767664ea6cb17f4863506a28387/readme%20image/daily_motivation.PNG)
![image.png](https://github.com/ramadanriz/do-it/blob/677ab9c4b3df9767664ea6cb17f4863506a28387/readme%20image/daily_motivation_2.PNG)

Fitur ini tersedia pada halaman beranda (homepage). Fitur ini dimaksudkan agar pengguna menjadi lebih termotivasi dalam menyelesaikan setiap kegiatannya dan bisa mencapai goalsnya tepat waktu. Selain pada homepage, fitur ini juga tersedia pada halaman todo yang berupa notifikasi. Jadi ketika pengguna membuka halaman todo, makan akan muncul notifikasi yang isinya berupa quotes.

### Goals & Todo

### Focus Timer

![image.png](https://github.com/ramadanriz/do-it/blob/d883556f0f3cd894a5a7595840578ddc8fd40b67/readme%20image/timer_1%20(1).png) ![image.png](https://github.com/ramadanriz/do-it/blob/d883556f0f3cd894a5a7595840578ddc8fd40b67/readme%20image/timer_2%20(1).png) ![image.png](https://github.com/ramadanriz/do-it/blob/d883556f0f3cd894a5a7595840578ddc8fd40b67/readme%20image/timer_4%20(1).png)

Focus timer dibuat berdasarkan teknik pomodoro, dimanan idenya adalah kita melakukan sebuah tugas atau pekerjaan harus fokus secara maksimal dalam jangka waktu yang disediakan. Secara default, waktu yang disediakan adalah 25 menit. Berikut fungsionalitas pada fitur focus timer:

1. Tombol `start` digunakan untuk memulai hitung mundur waktu
2. Saat waktu sedang berjalan tombol `stop` dan `setting` akan dinonaktifkan
3. Ketika waktu telah selesai, maka background akan berubah warna serta alarm akan berbunyi
4. Tombol `stop` digunakan untuk menghentikan waktu yang sedang berjalan. Selain itu juga digunakan untuk mematikan suara alarm ketika waktu telah selesai
5. Tombol `setting` digunakan untuk melakukan kustomisasi pada waktu.

![image.png](https://github.com/ramadanriz/do-it/blob/fd00e7a4f4648b34e73c5cf438af08daa5cf482b/readme%20image/timer_3.PNG)

Jika waktu default yang disediakan dirasa kurang atau terlalu lama, pengguna bisa melakukan kustomisasi dengan memanfaatkan tombol `setting` yang tersedia. Makan akan muncul form untuk mengisi lamanya waktu yang diinginkan.

## Resources

- Visual Studio Code
- Postman
- Javascript
- Node.js
- HTML
- CSS
- Bootstrap
- SweetAlert
- Webpack
- FontAwesome
- Google Fonts
- Freepik

## Tim Kami

### CPSG-35
1. F2299A280 - Rio Ramadhan Bahtiar
2. F2393A396 - Faiz Fachrudin 
3. F2168E127 - Dwiky Darmawansyah
4. F2209A174 - Rizky Ramadhani
