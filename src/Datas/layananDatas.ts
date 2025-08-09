export interface LayananData {
  title: string;
  subtitle?: string;
  description?: string;
  note?: string;
  badgeText?: string;
  href?: string;
}
export const layananDatas: LayananData[] = [
  {
    title: "ULTKSP",
    subtitle: '"Dibimbing oleh tenaga ahli yang berpengalaman."',
    description:
      "Unit Layanan Terpadu Kekerasan Seksual dan Perundungan (ULTKSP) merupakan tempat pelayanan bagi Mahasiswa FILKOM untuk memberikan layanan informasi yang dibutuhkan termasuk menerima dan mendokumentasikan laporan dugaan Kekerasan Seksual dan Perundungan.",
    note: "Semua percakapan bersifat rahasia dan tidak dibagikan ke pihak manapun tanpa izinmu.",
    badgeText:
      "Semua percakapan bersifat rahasia dan tidak dibagikan ke pihak manapun tanpa izinmu.",
    href: "/layanan/ultksp",
  },
  {
    title: "REKAN MELANGKAH",
    subtitle: '"Terkadang, yang dibutuhkan hanyalah didengarkan."',
    description:
      "Bicara dengan orang yang seusia, yang pernah ada di posisi serupa, bisa terasa lebih ringan. Konseling Rekan Sebaya adalah ruang untukmu berbagi cerita tanpa tekanan. Pendampingnya adalah mahasiswa terlatih yang telah melalui pelatihan mendengar aktif, empati, dan prinsip kerahasiaan.",
    note: "Tujuan utama bukan untuk memberikan solusi, tapi menjadi tempat aman untuk merasa tidak sendiri",
    badgeText:
      "Tujuan utama bukan untuk memberikan solusi, tapi menjadi tempat aman untuk merasa tidak sendiri.",
    href: "/layanan/rekanmelangkah",
  },
];

export default layananDatas;
