import { NavbarItem } from "@docusaurus/theme-common";

const navbarItems: NavbarItem[] = [
    {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Docs',
    },
    {
        to: '/general/intro',
        label: 'General',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/general/dot/intro', label: 'dot' },
            { to: '/general/d2/intro', label: 'd2' },
            { to: '/general/diagramsnet/intro', label: 'diagramsnet' },
            { to: '/general/excalidraw/intro', label: 'excalidraw' },
            { to: '/general/graphviz/intro', label: 'graphviz' },
            { to: '/general/mermaid/intro', label: 'mermaid' },
            { to: '/general/plantuml/intro', label: 'plantuml' },
            { to: '/general/tikz/intro', label: 'tikz' },
            { to: '/general/umlet/intro', label: 'umlet' },
        ],
    },
    {
        to: '/architecture/intro',
        label: 'Architecture',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/architecture/c4plantuml/intro', label: 'c4plantuml' },
            { to: '/architecture/nomnoml/intro', label: 'nomnoml' },
            { to: '/architecture/structurizr/intro', label: 'structurizr' },
        ],
    },
    {
        to: '/infrastructure/intro',
        label: 'Infrastructure',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/infrastructure/actdiag/intro', label: 'actdiag' },
            { to: '/infrastructure/blockdiag/intro', label: 'blockdiag' },
            { to: '/infrastructure/nwdiag/intro', label: 'nwdiag' },
            { to: '/infrastructure/packetdiag/intro', label: 'packetdiag' },
            { to: '/infrastructure/rackdiag/intro', label: 'rackdiag' },
            { to: '/infrastructure/seqdiag/intro', label: 'seqdiag' },
            { to: '/infrastructure/wireviz/intro', label: 'wireviz' },
        ],
    },
    {
        to: '/database/intro',
        label: 'Databases',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/database/dbml/intro', label: 'dbml' },
            { to: '/database/erd/intro', label: 'erd' },
        ],
    },
    {
        to: '/hardware/intro',
        label: 'Hardware',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/hardware/bytefield/intro', label: 'bytefield' },
            { to: '/hardware/symbolator/intro', label: 'symbolator' },
            { to: '/hardware/wavedrom/intro', label: 'wavedrom' },
        ],
    },
    {
        to: '/dataviz/intro',
        label: 'Data Viz',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/dataviz/vega/intro', label: 'vega' },
            { to: '/dataviz/vegalite/intro', label: 'vegalite' },
        ],
    },
    {
        to: '/ascii/intro',
        label: 'ASCII & Tools',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/ascii/bpmn/intro', label: 'bpmn' },
            { to: '/ascii/ditaa/intro', label: 'ditaa' },
            { to: '/ascii/goat/intro', label: 'goat' },
            { to: '/ascii/pikchr/intro', label: 'pikchr' },
            { to: '/ascii/svgbob/intro', label: 'svgbob' },
        ],
    },
    {
        href: 'https://github.com/ruseleredu/kroki-docs',
        label: 'GitHub',
        position: 'right',
    },
];

export default navbarItems;
