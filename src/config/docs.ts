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
                {
                    title: "Primeros pasos",
                    href: "/docs/documentation",
                },
                {
                    title: "Mi dashboard",
                    href: "/docs/documentation/dashboard",
                },
            ],
        },
        {
            title: "Pacientes",
            items: [
                {
                    title: "Crear mi primer paciente",
                    href: "/docs/documentation/patients",
                },
                {
                    title: "Ficha de medicamentos",
                    href: "/docs/documentation/patients/medicines",
                },
                {
                    title: "Agenda de citas",
                    href: "/docs/documentation/patients/appointments",
                },
            ],
        },
        {
            title: "Evoluciones diarias",
            items: [
                {
                    title: "Crear evolución",
                    href: "/docs/documentation/evolutions",
                },
                {
                    title: "Crear evolución no vinculada",
                    href: "/docs/documentation/evolutions/standalone",
                },
            ],
        },
        {
            title: "Informes",
            items: [
                {
                    title: "Crear mi primer informe",
                    href: "/docs/documentation/reports",
                },
            ],
        },
        {
            title: "Circulos",
            items: [
                {
                    title: "Crear mi primer circulo",
                    href: "/docs/documentation/circles",
                    disabled: true,
                },
                {
                    title: "Invitar a un profesional",
                    href: "/docs/documentation/circles/invite",
                    disabled: true,
                },
                {
                    title: "Compartir una evolución",
                    href: "/docs/documentation/circles/share",
                    disabled: true,
                },
                {
                    title: "Compartir un informe",
                    href: "/docs/documentation/circles/share-report",
                    disabled: true,
                },
            ],
        },
        {
            title: "Consideraciones",
            items: [
                {
                    title: "Extras",
                    href: "/docs/documentation/extras",
                    disabled: true,
                },
                {
                    title: "Privacidad y seguridad",
                    href: "/docs/documentation/privacy",
                    disabled: true,
                },
                {
                    title: "Soporte y contacto",
                    href: "/docs/documentation/support",
                    disabled: true,
                },
            ],
        },
    ],
};
