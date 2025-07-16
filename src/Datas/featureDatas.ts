import LaporIcon from "../assets/lapor.png";
import BelaDiriIcon from "../assets/tutor.png";
import MotivasiIcon from "../assets/motivasi.png";

export interface FeatureData {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  subtitleColor?: string; // Optional, used for styling the subtitle background
  backgroundColor?: string;
  href?:string;
}

export const featuresDatas: FeatureData[] = [
  {
    title: "Laporkan Kekerasan",
    subtitle: "Suaramu berharga. Laporkan.",
    description:
      "Kami menyediakan platform yang aman dan mudah digunakan untuk melaporkan kekerasan. Dengan fitur ini, kamu bisa berbagi cerita tanpa rasa takut, dan tim kami akan siap membantu.",
    buttonText: "Laporkan",
    imageUrl: LaporIcon,
    backgroundColor: "bg-orange-100",
    href:"/laporan"
  },
  {
    title: "Tutorial Beladiri",
    subtitle: "Kenali risiko. Lindungi diri.",
    description:
      "Dalam keadaan darurat, pengetahuan dasar bisa menyelamatkanmu. Awarely menyediakan video dan ilustrasi tutorial bela diri yang bisa kamu akses kapan saja, bahkan tanpa koneksi internet.",
    buttonText: "Telusuri",
    imageUrl: BelaDiriIcon,
    backgroundColor: "bg-primary-dark",
  },
  {
    title: "Motivasi Harian",
    subtitle: "Kata-kata kecil, semangat besar.",
    description:
      "Setiap hari bisa terasa berat. Tapi kamu berhak mendapatkan semangat. Fitur yang memungkinkan kamu menuliskan dan menyimpan kata-kata motivasi untuk dibaca ulang di hari-hari sulit.",
    buttonText: "Telusuri",
    imageUrl: MotivasiIcon,
    backgroundColor: "bg-orange-100",
  },
];
