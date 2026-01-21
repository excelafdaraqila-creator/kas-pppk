// ================= AMBIL DATA =================
let kasData = JSON.parse(localStorage.getItem("kasData")) || [];

let saldo = 0;
let totalMasuk = 0;
let totalKeluar = 0;

const tabelKas = document.getElementById("tabelKas");
const saldoEl = document.getElementById("saldo");
const totalMasukEl = document.getElementById("totalMasuk");
const totalKeluarEl = document.getElementById("totalKeluar");

const rekapMap = {};

// ================= PROSES =================
kasData.forEach(item => {
  totalMasuk += item.masuk;
  totalKeluar += item.keluar;
  saldo += item.masuk - item.keluar;

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.tanggal}</td>
    <td>${item.nama}</td>
    <td>${item.uraian}</td>
    <td>${item.masuk ? "Rp " + item.masuk.toLocaleString("id-ID") : "-"}</td>
    <td>${item.keluar ? "Rp " + item.keluar.toLocaleString("id-ID") : "-"}</td>
    <td>Rp ${saldo.toLocaleString("id-ID")}</td>
  `;
  tabelKas.appendChild(tr);

  if (item.masuk > 0 && item.nama !== "-") {
    rekapMap[item.nama] = (rekapMap[item.nama] || 0) + item.masuk;
  }
});

// ================= RINGKASAN =================
saldoEl.textContent = "Rp " + saldo.toLocaleString("id-ID");
totalMasukEl.textContent = "Rp " + totalMasuk.toLocaleString("id-ID");
totalKeluarEl.textContent = "Rp " + totalKeluar.toLocaleString("id-ID");
