import { NavbarItem } from "@docusaurus/theme-common";

const navbarItems: NavbarItem[] = [
    {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Docs',
    },
    {
        href: 'https://github.com/ruseleredu/kroki-docs',
        label: 'GitHub',
        position: 'right',
    },
];

export default navbarItems;
