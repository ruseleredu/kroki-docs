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
            { to: '/general/mermaid/intro', label: 'Mermaid' },
            { to: '/general/plantuml/intro', label: 'PlantUML' },
            { to: '/general/graphviz/intro', label: 'Graphviz' },
            { to: '/general/dot/intro', label: 'Graphviz DOT' },
            { to: '/general/d2/intro', label: 'D2' },
            { to: '/general/diagramsnet/intro', label: 'Diagrams.net' },
            { to: '/general/excalidraw/intro', label: 'Excalidraw' },
            { to: '/general/umlet/intro', label: 'UMLet' },
            { to: '/general/tikz/intro', label: 'TikZ' },
        ],
    },
    {
        to: '/architecture/intro',
        label: 'Architecture',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/architecture/c4plantuml/intro', label: 'C4-PlantUML' },
            { to: '/architecture/structurizr/intro', label: 'Structurizr' },
            { to: '/architecture/nomnoml/intro', label: 'Nomnoml' },
        ],
    },
    {
        to: '/infrastructure/intro',
        label: 'Infrastructure',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/infrastructure/blockdiag/intro', label: 'BlockDiag' },
            { to: '/infrastructure/actdiag/intro', label: 'ActDiag' },
            { to: '/infrastructure/nwdiag/intro', label: 'NwDiag' },
            { to: '/infrastructure/rackdiag/intro', label: 'RackDiag' },
            { to: '/infrastructure/packetdiag/intro', label: 'PacketDiag' },
            { to: '/infrastructure/seqdiag/intro', label: 'SeqDiag' },
            { to: '/infrastructure/wireviz/intro', label: 'Wireviz' },
        ],
    },
    {
        to: '/database/intro',
        label: 'Database',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/database/dbml/intro', label: 'DBML' },
            { to: '/database/erd/intro', label: 'ERD' },
        ],
    },
    {
        to: '/hardware/intro',
        label: 'Hardware',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/hardware/wavedrom/intro', label: 'WaveDrom' },
            { to: '/hardware/bytefield/intro', label: 'Bytefield' },
            { to: '/hardware/symbolator/intro', label: 'Symbolator' },
        ],
    },
    {
        to: '/dataviz/intro',
        label: 'Data Visualization',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/dataviz/vega/intro', label: 'Vega' },
            { to: '/dataviz/vegalite/intro', label: 'Vega-Lite' },
        ],
    },
    {
        to: '/ascii/intro',
        label: 'ASCII & Tools',
        position: 'left',
        type: 'dropdown',
        items: [
            { to: '/ascii/ditaa/intro', label: 'Ditaa' },
            { to: '/ascii/svgbob/intro', label: 'SVGBob' },
            { to: '/ascii/goat/intro', label: 'GoAT' },
            { to: '/ascii/pikchr/intro', label: 'Pikchr' },
            { to: '/ascii/bpmn/intro', label: 'BPMN' },
        ],
    },
    {
        to: '/docs/live',
        label: 'Live Editor',
        position: 'right',
        type: 'dropdown',
        items: [
            { href: 'https://mermaid.live', label: 'Mermaid' },
        ],

    },
    {
        href: 'https://github.com/ruseleredu/kroki-docs',
        label: 'GitHub',
        position: 'right',
    },
];

export default navbarItems;
