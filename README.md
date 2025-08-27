BACKEND SKILL TEST API
API ini dibuat dengan NodeJS, ExpressJS, dan PostgreSQL. API ini menyediakan 4 endpoint untuk masing-masing operasi CRUD pada resource user.
Data disimpan pada database postgres dalam tabel 'users' yang memiliki 6 field termasuk id.

API ini juga telah di deploy menggunakan vercel ke alamat ini: https://backend-skill-test.vercel.app
Pada versi yang telah dideploy ini database postgres dibuat dengan supabase.

Semua endpoint juga telah dites dengan menggunakan postman. Test collection terkait juga telah dilampirkan di dalam repositori. 

Instruksi:
- Jalankan perintah 'npm run install' untuk mengunduh dependensi
- Masukkan konfigurasi database postgres ke dalam folder .env baru.
- Contoh konfigurasi:
  PGUSER=username
  PGHOST=localhost
  PGPASSWORD=secretpassword
  PGDATABASE=postgres
  PGPORT=5432
- Jalankan perintah 'npm run migrate' untuk membuat tabel 'users' dalam database
- Jalankan perintah 'npm run dev' untuk menjalankan program
- Kirimkan request ke endpoint yang disediakan API
