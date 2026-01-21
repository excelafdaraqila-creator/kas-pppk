// ================= INIT =================
let saldo = 0;
let totalMasuk = 0;
let totalKeluar = 0;

const tabelKas = document.getElementById("tabelKas");
const saldoEl = document.getElementById("saldo");
const totalMasukEl = document.getElementById("totalMasuk");
const totalKeluarEl = document.getElementById("totalKeluar");

// ================= PROSES DATA =================
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
});

// ================= RINGKASAN =================
saldoEl.textContent = "Rp " + saldo.toLocaleString("id-ID");
totalMasukEl.textContent = "Rp " + totalMasuk.toLocaleString("id-ID");
totalKeluarEl.textContent = "Rp " + totalKeluar.toLocaleString("id-ID");

// ================= GRAFIK =================
const ctx = document.getElementById("grafikKas");

if (ctx) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Pemasukan", "Pengeluaran"],
      datasets: [{
        data: [totalMasuk, totalKeluar],
        backgroundColor: [
          "rgba(30,144,255,0.7)",
          "rgba(220,53,69,0.7)"
        ],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => "Rp " + ctx.raw.toLocaleString("id-ID")
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: val => "Rp " + val.toLocaleString("id-ID")
          }
        }
      }
    }
  });
}

// ================= FOOTER UPDATE =================
const lastUpdateEl = document.getElementById("lastUpdate");
if (lastUpdateEl) {
  const now = new Date();
  const tgl = now.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  const jam = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit"
  });
  lastUpdateEl.textContent = `${tgl} • ${jam} WIB`;
}

// ================= DARK MODE =================
const toggleBtn = document.getElementById("toggleDark");

if (toggleBtn) {
  const saved = localStorage.getItem("darkMode");

  if (saved === "on") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "on");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "off");
      toggleBtn.textContent = "🌙";
    }
  });
}
