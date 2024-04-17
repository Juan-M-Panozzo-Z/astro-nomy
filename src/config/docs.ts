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
                    href: "/docs/first-steps",
                },
                {
                    title: "Mi dashboard",
                    href: "/docs/dashboard",
                },
            ],
        },
        {
            title: "Pacientes",
            items: [
                {
                    title: "Crear mi primer paciente",
                    href: "/docs/modules/patients",
                },
                {
                    title: "Ficha de medicamentos",
                    href: "/docs/modules/patients/medicines",
                },
                {
                    title: "Agenda de citas",
                    href: "/docs/modules/patients/appointments",
                },
            ],
        },
        {
            title: "Evoluciones diarias",
            items: [
                {
                    title: "Crear evolución",
                    href: "/docs/modules/evolutions",
                },
                {
                    title: "Crear evolución no vinculada",
                    href: "/docs/modules/evolutions/standalone",
                },
            ],
        },
        {
            title: "Informes",
            items: [
                {
                    title: "Crear mi primer informe",
                    href: "/docs/modules/reports",
                },
            ],
        },
        {
            title: "Circulos",
            items: [
                {
                    title: "Crear mi primer circulo",
                    href: "/docs/modules/circles",
                    disabled: true,
                },
                {
                    title: "Invitar a un profesional",
                    href: "/docs/modules/circles/invite",
                    disabled: true,
                },
                {
                    title: "Compartir una evolución",
                    href: "/docs/modules/circles/share",
                    disabled: true,
                },
                {
                    title: "Compartir un informe",
                    href: "/docs/modules/circles/share-report",
                    disabled: true,
                },
            ],
        },
        {
            title: "Consideraciones",
            items: [
                {
                    title: "Extras",
                    href: "/docs/modules/extras",
                    disabled: true,
                },
                {
                    title: "Privacidad y seguridad",
                    href: "/docs/modules/privacy",
                    disabled: true,
                },
                {
                    title: "Soporte y contacto",
                    href: "/docs/modules/support",
                    disabled: true,
                },
            ],
        },
    ],
};
