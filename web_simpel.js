// Ambil elemen input
const input = document.getElementById("inputNomor");

// Dengarkan event: saat user menekan tombol Enter di dalam input
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const nomor = input.value; // Ambil nilai yang diketik
    const container = document.querySelector(".container"); // Ambil div kontainernya

    // Ubah isi container jadi teks baru
    container.innerHTML = `<p>Jadi nomormu adalah <strong>${nomor}</strong></p>`;
  }
});