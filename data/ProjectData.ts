export const projects = [
  {
    id: 1,
    title: "Civix",
    subtitle: "Smart City Complaint & Service Platform",
    year: "2026",
    category: "Full Stack Web Application",
    status: "Completed",

    image: "https://i.ibb.co.com/6cyVVRMK/civix.jpg",

    overview:
      "Civix is a modern civic engagement platform that bridges the gap between citizens and local authorities. It enables communities to report public issues, track complaint progress, and promote transparent, accountable, and efficient urban service management.",

    problem:
      "Citizens often lack a centralized and transparent way to report public issues and monitor their resolution, creating communication gaps and delays in civic service delivery.",

    solution:
      "Civix provides a centralized platform for reporting civic issues, tracking complaint status, and streamlining communication between citizens and local authorities.",

    techStack: {
      frontend: [
        "Next.js",
        "Tailwind CSS",
        "Typescript",
        "React Hook Form",
        "Lucide React",
        "shadcn",
      ],

      backend: [
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "JWT Authentication",
        "bKash Payment Gateway",
      ],

      deployment: ["Vercel"],
    },

    features: [
      "Role-based authentication for Citizens, Volunteers, and Admins",
      "Civic issue reporting with descriptions, images, and location details",
      "Complaint tracking with status updates",
      "Complaint management with CRUD functionality",
      "Role-based dashboards for different user types",
      "Administrative control over complaints and users",
      "Responsive design for desktop, tablet, and mobile",
      "Modern and user-friendly interface",
    ],

    highlights: [
      "3 User Roles",
      "Secure Authentication",
      "Civic Issue Tracking",
      "Fully Responsive",
    ],

    challenges: [
      "Implementing secure role-based authorization",
      "Managing protected routes and access permissions",
      "Designing an efficient complaint management workflow",
      "Structuring relational data with PostgreSQL and Prisma",
    ],

    learning: [
      "Role-based access control",
      "JWT-based authentication",
      "REST API development with Express.js",
      "Relational database design with PostgreSQL",
      "Database management using Prisma ORM",
      "Building scalable full-stack applications",
    ],

    futureImprovements: [
      "Real-time complaint status notifications",
      "Email and SMS alerts",
      "Interactive maps for civic issue locations",
      "Advanced complaint analytics and reporting",
      "Automated complaint prioritization",
    ],

    stats: {
      roles: 3,
      dashboards: 3,
      authentication: "JWT",
      paymentGateway: "bKash",
      database: "PostgreSQL",
      orm: "Prisma",
      deployment: "Vercel",
      responsive: true,
    },

    links: {
      live: "https://civix-frontend-kappa.vercel.app/",
      client: "https://github.com/Taher027/civix-frontend.git",
      server: "https://github.com/Taher027/civix-backend.git",
    },
  },

  {
    id: 2,
    title: "Rent Nest",
    subtitle: "Smart Property Rental & Management Platform",

    year: "2026",
    category: "Full Stack Real Estate Web Application",
    status: "Completed",

    image: "https://i.ibb.co.com/2YkSXBYv/rent.jpg",

    overview:
      "Rent Nest is a modern property rental platform that connects tenants with landlords through a secure and streamlined digital experience. It enables users to explore rental properties, submit rental requests, manage property listings, and handle rental workflows through role-based dashboards.",

    problem:
      "Finding suitable rental properties and managing rental requests can be time-consuming due to fragmented listings, inefficient communication, and a lack of centralized rental management.",

    solution:
      "Rent Nest provides a centralized platform for property discovery, advanced search and filtering, rental request management, and role-based property administration, simplifying the rental process for tenants, landlords, and administrators.",

    techStack: {
      frontend: [
        "Next.js 16",
        "React Hook Form",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
      ],

      backend: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "JWT Authentication",
        "Zod Validation",
      ],

      payment: ["SSLCommerz"],

      deployment: ["Vercel"],
    },

    features: [
      "Role-based access for Admin, Landlord, and Tenant",
      "Secure authentication and protected routes",
      "Property listings with detailed information",
      "Advanced property search and filtering",
      "Property management with CRUD operations",
      "Rental request submission and management",
      "Landlord dashboard for managing properties and requests",
      "Tenant dashboard for tracking rental requests",
      "Admin dashboard for managing users and listings",
      "Rental payment integration with SSLCommerz",
      "Profile management",
      "Responsive UI for desktop, tablet, and mobile",
    ],

    highlights: [
      "3 User Roles",
      "Role-Based Access Control",
      "Property Search & Filtering",
      "Rental Request Workflow",
      "SSLCommerz Integration",
      "Responsive Design",
    ],

    challenges: [
      "Implementing role-based authorization",
      "Managing protected routes and user permissions",
      "Designing relational database models with Prisma",
      "Building property search and filtering workflows",
      "Managing rental request status and duplicate requests",
      "Integrating the rental payment workflow",
    ],

    learning: [
      "Next.js App Router",
      "Full-Stack TypeScript Development",
      "REST API Development with Express.js",
      "Relational Database Design with PostgreSQL",
      "Database Management with Prisma ORM",
      "JWT Authentication and Authorization",
      "Input Validation with Zod",
      "Role-Based Dashboard Architecture",
      "Payment Gateway Integration",
      "Building Maintainable Full-Stack Applications",
    ],

    futureImprovements: [
      "Real-time rental request notifications",
      "Email and SMS notifications",
      "Interactive property maps",
      "Advanced property recommendations",
      "Landlord and tenant messaging",
      "Rental agreement generation",
      "Property availability calendar",
      "Rental analytics and reporting",
    ],

    stats: {
      roles: 3,
      dashboards: 3,
      authentication: "JWT",
      paymentGateway: "SSLCommerz",
      database: "PostgreSQL",
      orm: "Prisma",
      backend: "Express.js",
      frontend: "Next.js",
      responsive: true,
    },

    links: {
      live: "https://rent-nest-taupe.vercel.app/",
      client: "https://github.com/Taher027/rentNest-frontend.git",
      server: "https://github.com/Taher027/RentNest.git",
    },
  },
];
export type TProject = (typeof projects)[number];

export const getProjectById = (id: string) =>
  projects.find((p) => String(p.id) === id);
