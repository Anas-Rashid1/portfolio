export type Project = { id: string; title: string; category: string; type: string; theme: string; image?: string; imageAlt?: string; stack: string[]; description: string; highlights: string[] };

export const portfolio = {
  name: "Anas",
  fullName: "Muhammad Anas Rashid",
  role: "Full Stack Engineer",
  location: "Karachi, Pakistan",
  email: "muhammadanasrashid18@gmail.com",
  github: "https://github.com/Anas-Rashid1",
  linkedin: "https://www.linkedin.com/in/muhammad-anas-rashid-1b720a241/",
  about: "I’m a full stack engineer with 3 years of experience building backend services and web applications for logistics, e-commerce, and IoT. I work across Node.js, NestJS, React, Next.js, PostgreSQL, MongoDB, and AWS, connecting reliable backend systems with practical interfaces.",
  approach: "I’ve led a team of five developers and delivered REST APIs, live tracking, WebSocket communication, and MQTT integrations. My mobile work includes React Native and Expo, with a Node.js backend and HiveMQ’s free MQTT broker for e-scooter control.",
  skills: ["Node.js", "NestJS", "React", "Next.js", "TypeScript", "React Native", "Expo", "MQTT", "HiveMQ", "AWS"],
  skillGroups: [
    { title: "Languages", items: ["JavaScript", "TypeScript", "Java", "Python", "SQL"] },
    { title: "Backend & real time", items: ["Node.js", "Express.js", "NestJS", "Spring Boot", "Spring MVC", "REST APIs", "WebSockets", "MQTT", "HiveMQ"] },
    { title: "Data & infrastructure", items: ["PostgreSQL", "MongoDB", "Redis", "AWS EC2", "AWS S3", "AWS Lambda", "Docker", "Linux"] },
    { title: "Frontend & mobile", items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Material-UI", "GSAP"] },
    { title: "Tools & collaboration", items: ["Git", "GitHub", "Jira", "Postman", "Team leadership"] },
  ],
  experience: [
    { company: "Metavative", role: "Senior Full Stack Software Engineer", location: "Karachi", period: "Sep 2026 — Present", highlights: ["Develop backend APIs and admin dashboard features for competition and group management.", "Build full stack features spanning request validation, service logic, and database queries.", "Collaborate with the development team to clarify requirements, resolve issues, and deliver features."] },
    { company: "Mac World Technology", role: "Team Lead", location: "Karachi", period: "Jun 2023 — Jan 2026", highlights: ["Led a team of five developers building and maintaining backend and full stack applications.", "Developed REST APIs and services using Node.js, NestJS, Express.js, PostgreSQL, MongoDB, Redis, and AWS."] },
  ],
  education: { degree: "BS Computer Science", institution: "University of Karachi (UBIT)", period: "2019 — 2023" },
  projects: [
    { id: "01", title: "E-Scooter App", category: "Mobile & IoT", type: "React Native · Expo · MQTT", theme: "orbit", image: "/images/e-scooter.png", imageAlt: "Illustrative electric scooter and mobile app studio scene", stack: ["React Native", "Expo", "Node.js", "MQTT", "HiveMQ"], description: "Built an e-scooter mobile app using React Native and Expo, with a Node.js backend for scooter control. MQTT messaging through HiveMQ’s free broker connects the app and backend to the scooter.", highlights: ["Mobile app built with React Native and Expo", "Node.js backend for scooter control", "MQTT integration using HiveMQ’s free broker"] },
    { id: "02", title: "Print Ordering Website", category: "Web development", type: "Posters · Sheets · Print products", theme: "forma", image: "/images/print-ordering.png", imageAlt: "Illustrative arrangement of posters, printed sheets, and rolled paper", stack: ["Web development", "Print products"], description: "Built a website inspired by the Signs365 print ordering experience, for posters, sheets, and other print products.", highlights: ["Website for posters, sheets, and other print products", "Print ordering experience inspired by Signs365"] },
    { id: "03", title: "Electronics E-Market", category: "E-commerce", type: "Electronic accessories · Online store", theme: "still", image: "/images/electronics.png", imageAlt: "Illustrative studio arrangement of headphones, keyboard, and electronic accessories", stack: ["E-commerce", "Web development"], description: "Built an e-market and e-commerce website for electronic accessories, bringing the product range into an online shopping experience.", highlights: ["E-commerce website for electronic accessories", "Online storefront for browsing the product range"] },
    { id: "04", title: "Moving7", category: "Logistics platform", type: "REST APIs · Live tracking", theme: "logistics", stack: ["REST APIs", "Live tracking", "Notifications"], description: "Built backend features for a logistics platform, connecting REST APIs with live tracking and location-based workflows.", highlights: ["REST API development", "Live tracking and automated notifications", "Location-based workflows"] },
    { id: "05", title: "Signs365", category: "Digital signage", type: "WebSockets · Device communication", theme: "signage", stack: ["WebSockets", "Backend development"], description: "Built a WebSocket backend for real-time device communication in a digital signage project.", highlights: ["WebSocket backend", "Real-time communication with devices"] },
    { id: "06", title: "StarBike IoT", category: "Connected devices", type: "MQTT · REST APIs", theme: "iot", stack: ["MQTT", "REST APIs", "IoT"], description: "Developed MQTT and REST API features for bike tracking and predictive maintenance workflows.", highlights: ["MQTT and REST API integration", "Bike tracking features", "Predictive maintenance workflows"] },
    { id: "07", title: "Gamer Gizmo", category: "E-commerce", type: "JWT · Inventory · Stripe", theme: "gaming", stack: ["JWT", "Role-based access", "Stripe", "E-commerce"], description: "Built e-commerce modules covering products, inventory, authentication, access control, and payments.", highlights: ["Product and inventory modules", "JWT authentication and role-based access", "Stripe payment modules"] },
    { id: "08", title: "Enterprise Backend API System", category: "Backend engineering", type: "Java · Spring Boot · Spring MVC", theme: "backend", stack: ["Java", "Spring Boot", "Spring MVC", "DTOs"], description: "Built enterprise CRUD APIs using Java, Spring Boot, and Spring MVC, with DTOs for data transfer.", highlights: ["CRUD API development", "Java, Spring Boot, and Spring MVC", "DTO-based data transfer"] },
  ] as Project[],
};
