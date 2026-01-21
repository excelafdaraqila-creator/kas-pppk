// ================= DATA =================
// data diambil dari data_kas_pppk.js
// pastikan file itu dipanggil lebih dulu di index.html

let saldo = 0;
let totalMasuk = 0;
let totalKeluar = 0;

const tabelKas = document.getElementById("tabelKas");
const saldoEl = document.getElementById("saldo");
const totalMasukEl = document.getElementById("totalMasuk");
const totalKeluarEl = document.getElementById("totalKeluar");

// ================= PROSES DATA KAS =================
kasData.forEach(item => {
  totalMasuk += item.masuk;
  totalKeluar += item.keluar;

  saldo += item.masuk - item.keluar;

  // Buat baris tabel
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
});

// ================= TAMPILKAN RINGKASAN =================
saldoEl.textContent = "Rp " + saldo.toLocaleString("id-ID");
totalMasukEl.textContent = "Rp " + totalMasuk.toLocaleString("id-ID");
totalKeluarEl.textContent = "Rp " + totalKeluar.toLocaleString("id-ID");

// ================= GRAFIK PEMASUKAN vs PENGELUARAN =================
const ctx = document.getElementById("grafikKas");

if (ctx) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Pemasukan", "Pengeluaran"],
      datasets: [
        {
          label: "Jumlah (Rp)",
          data: [totalMasuk, totalKeluar],
          backgroundColor: [
            "rgba(30, 144, 255, 0.7)", // biru
            "rgba(220, 53, 69, 0.7)"   // merah
          ],
          borderRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return "Rp " + context.raw.toLocaleString("id-ID");
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return "Rp " + value.toLocaleString("id-ID");
            }
          }
        }
      }
    }
  });
}

// ================= FOOTER: TANGGAL UPDATE OTOMATIS =================
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
