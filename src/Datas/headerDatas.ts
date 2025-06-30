export interface HeaderData {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
}
export const headerDatas: HeaderData = {
  title: "Awarely",
  subtitle: "A React Template for Tailwind CSS",
};
export interface HeroHeaderData {
  title: string;
  motto: string;
  description: string;
}
export const heroHeaderData: HeroHeaderData = {
  title: "Awarely",
  motto: '"Tempat Aman untuk Suaramu Didengar."',
  description:
    "Kami percaya bahwa setiap suara, sekecil apa pun, berharga. Entah kamu ingin melaporkan kekerasan, mencari motivasi untuk bangkit, atau hanya butuh tempat untuk merasa didengar. Kami ada di sini, mendampingimu tanpa prasangka.",
};
