export type NavItem = {
    id: number;
    label: string;
    href: string;
    isExternal?: boolean;
};

export const navigationItems: NavItem[] = [
    { id: 1, label: "Beranda", href: "#hero" },
    { id: 2, label: "Fitur", href: "#features" },
    { id: 3, label: "Konseling", href: "#layanan" },
    { id: 4, label: "Motivasi", href: "#motivasi" },
];