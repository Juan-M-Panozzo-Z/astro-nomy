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
                    title: "Introducción",
                    href: "/docs/documentation",
                },
                {
                    title: "Dashboard",
                    href: "/docs/documentation/dashboard",
                },
                {
                    title: "Configuration  Astro DB",
                    href: "/docs/documentation/components",
                },
                {
                    title: "Search (Fuse.js)",
                    href: "/docs/in-progress",
                },
            ],
        },
        // {
        //   title: "Pages",
        //   items: [
        //     {
        //       title: "Landing",
        //       href: "/docs/in-progress",
        //       disabled: true,
        //     },
        //     {
        //       title: "Changelog",
        //       href: "/docs/in-progress",
        //       disabled: true,
        //     },
        //     {
        //       title: "Wait List",
        //       href: "/docs/in-progress",
        //       disabled: true,
        //     },
        //   ],
        // },
        // {
        //   title: "Examples",
        //   items: [
        //     // {
        //     //   title: "Introducción",
        //     //   href: "/docs/in-progress",
        //     //   disabled: true,
        //     // },
        //     {
        //       title: "Static Blog",
        //       href: "/docs/in-progress",
        //       disabled: true,
        //     },
        //     {
        //       title: "Docs & Guides",
        //       href: "/docs/in-progress",
        //       disabled: true,
        //     },
        //     {
        //       title: "Blog with Astro DB",
        //       href: "/docs/in-progress",
        //       disabled: true,
        //     },
        //     {
        //       title: "Ecommerce",
        //       href: "/docs/in-progress",
        //       disabled: true,
        //     },
        //     {
        //       title: "Animes (GraphQL)",
        //       href: "/docs/in-progress",
        //       disabled: true,
        //     },
        //     {
        //       title: "Authentification (Lucia)",
        //       href: "/docs/in-progress",
        //       disabled: true,
        //     },
        //   ],
        // },
    ],
};
