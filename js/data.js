// =========================================================
//  DramaBox – Veri Seti  (js/data.js)
// =========================================================

const DRAMAS = [
  { id:1,  title:"Kader Bizi Bağladı",  country:"K-Drama", year:2024, eps:16, rating:"9.1", genre:"Romance",   color:"p1",  progress:65 },
  { id:2,  title:"Karanlık Ay",          country:"C-Drama", year:2024, eps:24, rating:"8.8", genre:"Fantastik", color:"p2",  progress:30 },
  { id:3,  title:"Son Nefes",            country:"K-Drama", year:2023, eps:12, rating:"9.4", genre:"Gerilim",   color:"p3",  progress:82 },
  { id:4,  title:"Gül Bahçesi",          country:"Türk",    year:2024, eps:38, rating:"8.5", genre:"Dram",      color:"p4",  progress:50 },
  { id:5,  title:"Yıldız Tozu",          country:"J-Drama", year:2024, eps:10, rating:"8.7", genre:"Romance",   color:"p5",  progress:15 },
  { id:6,  title:"Ejder Kalbi",          country:"C-Drama", year:2023, eps:40, rating:"9.0", genre:"Tarihi",    color:"p6",  progress:90 },
  { id:7,  title:"Gece Gözleri",         country:"Thai",    year:2024, eps:14, rating:"8.9", genre:"Aksiyon",   color:"p7",  progress:45 },
  { id:8,  title:"Aşkın Rengi",          country:"K-Drama", year:2024, eps:16, rating:"9.3", genre:"Romance",   color:"p8",  progress:70 },
];

const TRENDING = [
  { id:9,  title:"Fırtına Gecesi",  country:"K-Drama", year:2024, eps:16, rating:"9.5", genre:"Gerilim",  color:"p9",  live:true },
  { id:10, title:"Sonsuz Deniz",    country:"C-Drama", year:2024, eps:32, rating:"8.9", genre:"Tarihi",   color:"p10" },
  { id:11, title:"Şehrin Işıkları", country:"Türk",    year:2024, eps:42, rating:"8.6", genre:"Dram",     color:"p1"  },
  { id:12, title:"Bahar Rüzgarı",   country:"J-Drama", year:2024, eps:11, rating:"8.8", genre:"Romance",  color:"p2"  },
  { id:13, title:"Kırmızı İplik",   country:"K-Drama", year:2023, eps:16, rating:"9.2", genre:"Romantik", color:"p3"  },
  { id:14, title:"Sesin İzi",       country:"Thai",    year:2024, eps:13, rating:"8.7", genre:"Müzikal",  color:"p4"  },
  { id:15, title:"Labirent",        country:"C-Drama", year:2024, eps:36, rating:"9.1", genre:"Suç",      color:"p5"  },
  { id:16, title:"Yüksek Sesle",    country:"K-Drama", year:2024, eps:12, rating:"9.0", genre:"Komedi",   color:"p6"  },
];

const FEATURED = [
  { id:17, title:"Bin Yıllık Aşk",  country:"C-Drama", year:2024, eps:40, rating:"9.3", genre:"Tarihi / Fantastik",   color:"p7" },
  { id:18, title:"Sessiz Çığlık",   country:"K-Drama", year:2024, eps:14, rating:"9.5", genre:"Psikolojik",           color:"p8" },
  { id:19, title:"Altın Kelebek",   country:"Thai",    year:2024, eps:15, rating:"8.9", genre:"Romance",              color:"p9" },
  { id:20, title:"Derin Kök",       country:"Türk",    year:2024, eps:50, rating:"8.7", genre:"Aile Draması",         color:"p10" },
  { id:21, title:"Neon Şehri",      country:"J-Drama", year:2024, eps:9,  rating:"9.0", genre:"Neo-noir",             color:"p1" },
];

const WATCHLIST = [
  { color:"p1" }, { color:"p3" }, { color:"p5" },
  { color:"p7" }, { color:"p9" }, { color:"p2" },
  { color:"p4" }, { color:"p6" }, { color:"p8" },
  { color:"p10"}, { color:"p1" }, { color:"p3" },
];
