import { NavbarItem } from "@docusaurus/theme-common";

const navbarItems: NavbarItem[] = [
    {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Docs',
    },
    { to: '/general/intro', label: 'General', position: 'left' },
    { to: '/architecture/intro', label: 'Architecture', position: 'left' },
    { to: '/infrastructure/intro', label: 'Infrastructure', position: 'left' },
    { to: '/database/intro', label: 'Databases', position: 'left' },
    { to: '/hardware/intro', label: 'Hardware', position: 'left' },
    { to: '/dataviz/intro', label: 'Data Viz', position: 'left' },
    { to: '/ascii/intro', label: 'ASCII & Tools', position: 'left' },
    {
        href: 'https://github.com/ruseleredu/kroki-docs',
        label: 'GitHub',
        position: 'right',
    },
];

export default navbarItems;
