import {
  Pickaxe,
  Factory,
  Recycle,
  Landmark,
  Truck,
  Toilet,
  Droplets,
  Shirt,
  BookOpenCheck,
  Wrench,
  FlaskConical,
  ShieldCheck,
  Layers,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export type Sector = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const sectors: Sector[] = [
  {
    icon: Pickaxe,
    title: "Mining",
    description:
      "Minimize downtime and increase productivity in demanding operations.",
  },
  {
    icon: Factory,
    title: "Fabrication & Heavy Equipment",
    description:
      "Custom engineering solutions for large-scale production lines.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description: "Dependable services that keep facilities running smoothly.",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    description: "Robust solutions that improve service delivery and reliability.",
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Recycle,
    title: "Waste Management",
    description:
      "Protecting the environment, public health and supporting sustainable development through recycling and compliance.",
  },
  {
    icon: Truck,
    title: "Integrated Equipment Supply & Logistics",
    description:
      "Supply and delivery of high-quality mining equipment within tight timeframes at competitive market prices.",
  },
  {
    icon: Toilet,
    title: "Supply & Servicing of Portable Toilets",
    description:
      "Reliable sanitation solutions that keep remote and high-density sites compliant and operational.",
  },
  {
    icon: Droplets,
    title: "Total Fluid Management",
    description:
      "End-to-end handling of fluids that safeguards equipment life and site safety standards.",
  },
  {
    icon: Shirt,
    title: "Laundry & Cleaning Services",
    description:
      "Professional cleaning and laundry that maintains hygiene across mining and industrial facilities.",
  },
  {
    icon: BookOpenCheck,
    title: "Safety Logbooks",
    description:
      "Design & manufacturing of safety logbooks that keep your operations audit-ready at all times.",
  },
  {
    icon: Wrench,
    title: "Design & Manufacturing",
    description:
      "Civil engineering and fabrication services tailored to the demands of heavy industry.",
  },
  {
    icon: FlaskConical,
    title: "Innovative Water Treatment",
    description:
      "Sustainable water treatment solutions engineered for performance and environmental compliance.",
  },
];

export type Highlight = {
  tag: string;
  title: string;
  body: string;
};

export const highlights: Highlight[] = [
  {
    tag: "Equipment Supply",
    title: "Supply & delivery of different mining equipment",
    body: "We successfully supplied high-quality equipment within a tight timeframe at a competitive market price, ultimately delivering cost savings for our clients. Our efficient service and quality products helped meet their needs effectively.",
  },
  {
    tag: "Sustainability",
    title: "Waste Management",
    body: "Waste management services are essential for protecting the environment, promoting public health, and supporting sustainable development. They help reduce pollution, prevent disease, conserve natural resources through recycling, and ensure compliance with environmental regulations.",
  },
  {
    tag: "Fast Feature Delivery",
    title: "Design & manufacturing of safety logbooks",
    body: "Civil Engineering Services, Cleaning & laundry services — delivered fast and tailored to the operational rhythm of your site.",
  },
];

export type Reason = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const reasons: Reason[] = [
  {
    icon: ShieldCheck,
    title: "Proven Expertise",
    body: "Years of experience delivering reliable solutions across mining, manufacturing, waste management, and the public sector.",
  },
  {
    icon: Layers,
    title: "Tailored Solutions",
    body: "We customize our services to fit your specific operational needs, boosting efficiency and cutting downtime.",
  },
  {
    icon: Wrench,
    title: "Commitment to Quality",
    body: "Our engineering team uses the latest technology and rigorous standards to ensure durable, high-performance results.",
  },
  {
    icon: Globe2,
    title: "Local Focus, Global Reach",
    body: "Based in South Africa, we understand the unique challenges of the region while leveraging international best practice.",
  },
];

export const complianceText =
  "Setsere Holdings is strict to comply with all the standards and operating procedures that are required by the client and industry governing bodies in terms of employees, safety & equipment.";

export const aboutText =
  "Setsere Holding has built itself up over 6 years as a trusted supplier of mining equipment in South Africa, as well as key services for mining facilities that ensure the safety and reliability of equipment used. We work closely with our clients to bring them solutions that fit the needs of their facilities, whether they require welding, high capacity pumps, underground mining equipment, and more.";

export const stats = [
  { value: 6, suffix: "+", label: "Years In Business" },
  { value: 15, suffix: "+", label: "Team Members" },
  { value: 40, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "", label: "Service Lines" },
];

export const companyInfo = {
  name: "Setsere Holdings",
  phone: "079 609 1795",
  phoneHref: "tel:+27796091795",
  hours: "Mon – Fri: 08:00 – 17:00",
  email: "info@setsere.co.za",
  emailHref: "mailto:info@setsere.co.za",
  website: "setsere.co.za",
  ownership: "Black Youth female-owned | Level 1 BEE accredited",
  rights: "©2025 Setsere Holdings. All Rights Reserved.",
  socials: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "X", href: "#" },
    { name: "LinkedIn", href: "#" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];
