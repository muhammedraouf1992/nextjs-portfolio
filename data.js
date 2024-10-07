export const projectsData = [
  {
    id: 1,
    name: "Flowbit Nextjs store",
    description: `This custom Next.js store is a feature-rich e-commerce
                  platform built with Next.js server actions, Prisma, Shadcn,
                  Tailwind CSS, NextAuth, and Zod. The admin panel allows easy
                  management of categories and products with various variations,
                  including the ability to bulk add products using an Excel
                  sheet. The store supports seamless payment integration through
                  Paymob. Users can add items to their cart, sign in, and
                  benefit from an anonymous cart that automatically merges with
                  their account upon login.`,
    date: "2022-08-15",
    demoLink: "https://nextjs-custom-store-lilac.vercel.app/",
    image: "/flowbite.png",
    technologies: ["nextjs", "prisma", "tailwindcss", "shadcn", "zod"],
  },
  {
    id: 2,
    name: "instant support",
    description: `
    This website was developed to provide expert administrative consultation services for businesses and organizations. Built with WordPress, JavaScript, HTML, and CSS, the site offers a professional and streamlined interface. It highlights services such as process optimization, office management, and organizational strategy. The design ensures easy navigation, with sections dedicated to client success stories, team expertise, and a blog offering advice on improving administrative functions. The focus is on helping clients enhance their operational efficiency and achieve business goals through effective administration.
    `,

    date: "2022-06-20",
    demoLink: "https://isamcc.com/",
    image: "/instant-support.png",
    technologies: ["wordpress", "javascript", "html", "css"],
  },
  {
    id: 3,
    name: "busma egypt",
    description: `
    This website was designed to offer comprehensive security solutions for businesses and individuals. Built using WordPress, JavaScript, HTML, and CSS, the site provides an intuitive and professional interface showcasing various security services, including surveillance systems, cybersecurity, and access control. It features case studies, industry certifications, and a resource section with articles and guides on best security practices. The design emphasizes trust, reliability, and the advanced technology used by the company, making it easy for potential clients to learn about services and request consultations.
    `,
    date: "2022-09-10",
    demoLink: "https://busmaeg.com/",
    image: "/busma.png",
    technologies: ["wordpress", "javascript", "html", "css"],
  },
  {
    id: 4,
    name: "tasalyalkhair",
    description: `
   This website was built to showcase a wide range of premium dry fruits. Developed using WordPress, JavaScript, HTML, and CSS, the site features a clean, modern design with easy navigation, making it simple for users to browse and shop for various dry fruits, including almonds, walnuts, dates, and more. The website highlights the nutritional benefits of each product and includes a blog for healthy recipes and tips. With a focus on visual appeal and user experience, the site allows customers to effortlessly explore products and place orders online.
    
    `,
    date: "2022-05-30",
    demoLink: "https://tasalyalkhair.sa/",
    image: "/tasalyalkhier.png",
    technologies: ["wordpress", "javascript", "html", "css"],
  },
  {
    id: 5,
    name: "targetlines",
    description: `
     This website was created to promote the services of a digital marketing agency. Using WordPress, JavaScript, HTML, and CSS, the site presents a modern and professional design that highlights the company's expertise in SEO, social media marketing, content creation, and online advertising. It features case studies, client testimonials, and a blog section with industry insights. The layout is designed for seamless navigation, allowing potential clients to easily explore services, view success stories, and get in touch for consultations.
    `,
    date: "2022-07-12",
    demoLink: "https://targetlines.com/",
    image: "/targetlines.png",
    technologies: ["wordpress", "javascript", "html", "css"],
  },
  {
    id: 6,
    name: "sea catch",
    description: `
    This website was developed to showcase a variety of fresh seafood offerings. Built using WordPress, JavaScript, HTML, and CSS, it features a visually appealing and easy-to-navigate layout, highlighting the restaurant's menu, specials, and sourcing practices. Visitors can explore seafood dishes, learn about the restaurant’s sustainable sourcing, and make reservations directly through the site. The design focuses on a clean, modern aesthetic to enhance the user experience while presenting the freshness and quality of the seafood in a captivating way.
    `,
    date: "2022-10-01",
    demoLink: "https://seacatch-rs.com/en/",
    image: "/seacatch.png",
    technologies: ["wordpress", "javascript", "html", "css"],
  },
  {
    id: 7,
    name: "mowafy hospital",
    description: `
     This website was created to provide essential information and resources for individuals seeking treatment for addiction. Built using WordPress, JavaScript, HTML, and CSS, the site offers a clean, user-friendly interface with intuitive navigation. It features detailed descriptions of services, treatment programs, and staff, along with a blog section for educational content on addiction recovery. The design emphasizes accessibility, ensuring that visitors can easily find the support they need.
    `,
    date: "2022-10-01",
    demoLink: "https://mowafyhospital.com/",
    image: "/mowafyhospital.png",
    technologies: ["wordpress", "javascript", "html", "css"],
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/muhammedraouf1992",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammedraouf92/",
    icon: "linkedin",
    newTab: true,
  },

  {
    label: "Resume",
    link: "/public/My Resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
export function truncate(str, n) {
  return str.split(" ").slice(0, 10).join(" ") + "...";
}
