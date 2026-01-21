// ================= INIT =================
let saldo = 0;
let totalMasuk = 0;
let totalKeluar = 0;

const tabelKas = document.getElementById("tabelKas");
const saldoEl = document.getElementById("saldo");
const totalMasukEl = document.getElementById("totalMasuk");
const totalKeluarEl = document.getElementById("totalKeluar");
const rekapBody = document.getElementById("rekapAnggota");

// ================= PROSES DATA =================
const rekapMap = {};

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

  // Rekap setoran
  if (item.masuk > 0 && item.nama !== "-" && item.nama !== "Kas PPPK") {
    rekapMap[item.nama] = (rekapMap[item.nama] || 0) + item.masuk;
  }
});

// ================= RINGKASAN =================
saldoEl.textContent = "Rp " + saldo.toLocaleString("id-ID");
totalMasukEl.textContent = "Rp " + totalMasuk.toLocaleString("id-ID");
totalKeluarEl.textContent = "Rp " + totalKeluar.toLocaleString("id-ID");

// ================= REKAP ANGGOTA =================
if (rekapBody) {
  Object.entries(rekapMap)
    .sort((a, b) => b[1] - a[1])
    .forEach(([nama, total], index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${nama}</td>
        <td>Rp ${total.toLocaleString("id-ID")}</td>
      `;
      rekapBody.appendChild(tr);
    });
}

// ================= TOGGLE REKAP =================
const toggleRekapBtn = document.getElementById("toggleRekap");
const rekapContainer = document.getElementById("rekapContainer");

if (toggleRekapBtn && rekapContainer) {
  toggleRekapBtn.addEventListener("click", () => {
    rekapContainer.classList.toggle("active");
    toggleRekapBtn.innerHTML = rekapContainer.classList.contains("active")
      ? "🔼 Tutup Rekap Setoran Per Anggota"
      : "🔽 Rekap Setoran Per Anggota";
  });
}

// ================= FOOTER =================
const lastUpdateEl = document.getElementById("lastUpdate");
if (lastUpdateEl) {
  lastUpdateEl.textContent = "Data statis (manual)";
}
