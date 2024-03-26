import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Paginas",
      items: [
        {
          title: "Changelog",
          href: "/releases",
          description: "Replicate of Starlog template with Tailwind CSS.",
          image: "fake-img.jpg",
        },
        {
          title: "Waiting List",
          href: "waiting-list",
          description: "A waiting list page with form using Astro DB.",
          image: "fake-img.jpg",
          disabled: true,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Más",
      items: [
        {
          title: "Blog",
          href: "/blog",
          description: "Encontrá todo lo que necesitas saber sobre Mindbridge.",
          image: "fake-img.jpg",
        },
        {
          title: "Documentación",
          href: "/docs/getting-started",
          description:
            "La documentación sobre como usar Mindbridge.",
          image: "fake-img.jpg",
        },
        {
          title: "Releases",
          href: "/releases",
          description: "Todas las versiones de Mindbridge y sus cambios.",
          image: "fake-img.jpg",
        },
        // {
        //   title: "Blog DB",
        //   href: "/#blog-db",
        //   description:
        //     "Blog built using Astro DB. With categories, views & likes.",
        //   image: "fake-img.jpg",
        //   disabled: true,
        // },
        // {
        //   title: "Ecommerce",
        //   href: "/products",
        //   disabled: true,
        //   description: "Ecommerce pages fetching data from an API.",
        //   image: "fake-img.jpg",
        // },
        // {
        //   title: "Anime List",
        //   href: "/#anime-list",
        //   description: "Fetch anime content from an graphql endpoint",
        //   image: "fake-img.jpg",
        //   disabled: true,
        // },
        // {
        //   title: "Authentification",
        //   href: "/#authentification",
        //   description: "Implement an authentification using Astro DB & Lucia",
        //   image: "fake-img.jpg",
        //   disabled: true,
        // },
      ],
    },
  ],
  links: [
    {
      title: "Nuestros planes",
      href: "/pricing",
      description: "Pricing cards, FAQs and more.",
      image: "fake-img.jpg",
    },
    {
      title: "Sobre nosotros",
      href: "/about",
      description: "Simple page",
      image: "fake-img.jpg",
    },
  ],
};
