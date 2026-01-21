// ================= FORMAT RUPIAH =================
function rupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// ================= HITUNG TOTAL =================
let totalMasuk = 0;
let totalKeluar = 0;
let saldoBerjalan = 0;

// ================= TABEL TRANSAKSI =================
const tabelKas = document.getElementById("tabelKas");

kasData.forEach((item) => {
  totalMasuk += item.masuk;
  totalKeluar += item.keluar;
  saldoBerjalan += item.masuk - item.keluar;

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.tanggal}</td>
    <td>${item.nama}</td>
    <td>${item.uraian}</td>
    <td>${item.masuk ? rupiah(item.masuk) : "-"}</td>
    <td>${item.keluar ? rupiah(item.keluar) : "-"}</td>
    <td>${rupiah(saldoBerjalan)}</td>
  `;
  tabelKas.appendChild(tr);
});

// ================= DASHBOARD =================
document.getElementById("saldo").innerText = rupiah(saldoBerjalan);
document.getElementById("totalMasuk").innerText = rupiah(totalMasuk);
document.getElementById("totalKeluar").innerText = rupiah(totalKeluar);

// ================= GRAFIK =================
const ctx = document.getElementById("grafikKas");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Pemasukan", "Pengeluaran"],
    datasets: [
      {
        label: "Kas PPPK",
        data: [totalMasuk, totalKeluar],
        backgroundColor: ["#1e90ff", "#dc3545"],
        borderRadius: 8,
        barThickness: 70,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => rupiah(ctx.raw),
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => rupiah(value),
        },
      },
    },
  },
});

// ================= REKAP PER ANGGOTA =================
const rekap = {};
kasData.forEach((item) => {
  if (item.masuk > 0 && item.nama !== "-") {
    rekap[item.nama] = (rekap[item.nama] || 0) + item.masuk;
  }
});

const tbodyRekap = document.getElementById("rekapAnggota");
let no = 1;

Object.entries(rekap)
  .sort((a, b) => b[1] - a[1])
  .forEach(([nama, total]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${no++}</td>
      <td>${nama}</td>
      <td>${rupiah(total)}</td>
    `;
    tbodyRekap.appendChild(tr);
  });

// ================= TOGGLE REKAP =================
const toggleBtn = document.getElementById("toggleRekap");
const rekapContainer = document.getElementById("rekapContainer");

toggleBtn.addEventListener("click", () => {
  rekapContainer.classList.toggle("active");
  toggleBtn.innerHTML = rekapContainer.classList.contains("active")
    ? "🔼 Tutup Rekap Setoran Per Anggota"
    : "🔽 Rekap Setoran Per Anggota";
});

// ================= DARK MODE =================
const toggleDark = document.getElementById("toggleDark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ================= LAST UPDATE =================
const now = new Date();
document.getElementById("lastUpdate").innerText =
  now.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }) +
  " • " +
  now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }) +
  " WIB";
