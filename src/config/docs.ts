import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs/getting-started/",
        },
        {
            title: "Guides",
            href: "/guides",
        },
    ],
    sidebarNav: [
        {
            title: "Primeros pasos",
            items: [
                {
                    title: "Introducción",
                    href: "/docs/getting-started/",
                },
            ],
        },
        {
            title: "Documentación",
            items: [
                {
                    title: "Inicio",
                    href: "/docs/documentation",
                },
                {
                    title: "Dashboard",
                    href: "/docs/documentation/dashboard",
                },
                {
                    title: "Ficha de paciente",
                    href: "/docs/documentation/patients",
                },
                {
                    title: "Ficha de medicamentos",
                    href: "/docs/documentation/patients/medicines",
                },
            ],
        },
    ],
};
