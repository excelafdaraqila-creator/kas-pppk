let saldo = 0;
let totalMasuk = 0;
let totalKeluar = 0;

const saldoEl = document.getElementById("saldo");
const totalMasukEl = document.getElementById("totalMasuk");
const totalKeluarEl = document.getElementById("totalKeluar");
const tabel = document.getElementById("tabelKas");

kasData.forEach(item => {
  totalMasuk += item.masuk;
  totalKeluar += item.keluar;
  saldo += item.masuk - item.keluar;

  const row = `
    <tr>
      <td>${item.tanggal}</td>
      <td>${item.nama}</td>
      <td>${item.uraian}</td>
      <td>${item.masuk ? "Rp " + item.masuk.toLocaleString() : "-"}</td>
      <td>${item.keluar ? "Rp " + item.keluar.toLocaleString() : "-"}</td>
      <td>Rp ${saldo.toLocaleString()}</td>
    </tr>
  `;
  tabel.innerHTML += row;
});

saldoEl.innerText = "Rp " + saldo.toLocaleString();
totalMasukEl.innerText = "Rp " + totalMasuk.toLocaleString();
totalKeluarEl.innerText = "Rp " + totalKeluar.toLocaleString();
// ===== FOOTER: TANGGAL UPDATE OTOMATIS =====
const lastUpdateEl = document.getElementById("lastUpdate");

if (lastUpdateEl) {
  const now = new Date();

  const tanggal = now.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const jam = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit"
  });

  lastUpdateEl.textContent = `${tanggal} • ${jam} WIB`;
}


