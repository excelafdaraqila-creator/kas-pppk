const kasData = [
  // ===== SALDO AWAL =====
  {
    tanggal: "01-01-2026",
    nama: "-",
    uraian: "Saldo Awal",
    masuk: 870000,
    keluar: 0
  },

  // ===== IURAN 19 JANUARI 2026 =====
  { tanggal: "19-01-2026", nama: "Moch. Roni Susila", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Reni Susana", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Sri Nia Rahayu", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Yeti Rosmiati", uraian: "Iuran PPPK", masuk: 50000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Harun", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Yani Haryani", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Puspita Nursari L", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Dewi Hapitanty", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Rika Mayasari", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "B. Imas", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Hepi Sopiani", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Tini Rahmawati", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Nina Napisah", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Choirunisa", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Ai Sri Mulyati", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Iwan Sunandar", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Neti Mandasari", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Erlan Suherlan", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Asep Jamhur", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Uus Rodiana", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Yanwar Adiyanti U", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Elis Sumiati", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Rosi Rosalia Indah", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Siti Sa'adah", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Ai Rokayah", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Teddy Kusnandar", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Riki Maulana", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Sunardi", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Mira Nurdawanti", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Budi Aen", uraian: "Iuran PPPK", masuk: 50000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Nuri Asyukurillah", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Sandi Irfansyah", uraian: "Iuran PPPK", masuk: 50000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Alamsah", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Ceuceu Rahmawati", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Lela Resnawati", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Wawat", uraian: "Iuran PPPK", masuk: 50000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Adelia", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Asep Suherli", uraian: "Iuran PPPK", masuk: 30000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Iksan Noor G", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Ai Mulyatini", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Muslihat", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Cacih Suciati", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Miftah Wardiana", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Liska", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Wahid", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Ridwan Septian", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Hera", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "19-01-2026", nama: "Idang R", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },

  // ===== IURAN 20 JANUARI 2026 =====
  { tanggal: "20-01-2026", nama: "Agus Indra", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "20-01-2026", nama: "Lina Marlina", uraian: "Iuran PPPK", masuk: 50000, keluar: 0 },
  { tanggal: "20-01-2026", nama: "Wawan", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "20-01-2026", nama: "Dedeh Kurniasih", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "20-01-2026", nama: "Santi Robiyanti", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "20-01-2026", nama: "Kokom", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "20-01-2026", nama: "Mia Rosmiati", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "20-01-2026", nama: "Asep Jubaedi", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },
  { tanggal: "20-01-2026", nama: "Asep Sudiana", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 },

  // ===== PENGELUARAN =====
  { tanggal: "21-01-2026", nama: "Kas PPPK", uraian: "Santunan meninggal istri Pa Pendi", masuk: 0, keluar: 500000 },
  { tanggal: "21-01-2026", nama: "Kas PPPK", uraian: "Santunan meninggal orang tua Bu Rusti & Bu Irma", masuk: 0, keluar: 400000 },
  { tanggal: "21-01-2026", nama: "Kas PPPK", uraian: "Santunan meninggal orang tua Bu Tini", masuk: 0, keluar: 300000 },
  { tanggal: "21-01-2026", nama: "Kas PPPK", uraian: "Santunan sakit anak Pa Muslihat", masuk: 0, keluar: 300000 },

  // ===== TAMBAHAN BARU =====
  { tanggal: "14-02-2026", nama: "Kas PPPK", uraian: "Santunan meninggal suami Ibu Rika Sukarame", masuk: 0, keluar: 500000 },

  // ===== TAMBAHAN PEMASUKAN =====
  { tanggal: "14-02-2026", nama: "Tini Rahmawati", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 }
  { tanggal: "14-02-2026", nama: "Nina Napisah", uraian: "Iuran PPPK", masuk: 25000, keluar: 0 }

];
