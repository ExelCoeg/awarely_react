import { House, List, Users, CaseSensitive, type LucideProps } from "lucide-react";

export type NavItem = {
    id: number;
    label: string;
    href: string;
    icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
    isExternal?: boolean;
};

export const navigationItems: NavItem[] = [
    { id: 1, label: "Beranda", href: "#", icon: House },
    { id: 2, label: "Fitur", href: "#features", icon: List },
    { id: 3, label: "Konseling", href: "#layanan", icon: Users },
    { id: 4, label: "Motivasi", href: "#motivasi", icon: CaseSensitive },
];