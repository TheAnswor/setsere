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
};

export const services: Service[] = [
  { icon: Recycle, title: "Waste Management" },
  { icon: Truck, title: "Integrated Equipment Supply and Logistics Services" },
  { icon: Toilet, title: "Supply and Servicing of Portable Toilets" },
  { icon: Droplets, title: "Total Fluid Management" },
  { icon: Shirt, title: "Laundry and Cleaning Services" },
  { icon: BookOpenCheck, title: "Safety Logbooks" },
  { icon: FlaskConical, title: "Innovative Water Treatment Solution" },
  { icon: Wrench, title: "Civil Engineering Services" },
];

export type Highlight = {
  tag: string;
  title: string;
  body: string;
};

export const highlights: Highlight[] = [
  {
    tag: "Equipment Supply",
    title: "Supply and delivery of different mining equipment’s",
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
    body: "Civil Engineering Services · Cleaning & laundry services",
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
    body: "Our engineering team uses the latest technology and rigorous standards to ensure durable, high‑performance results.",
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

export const companyInfo = {
  name: "Setsere Holdings",
  phone: "079 609 1795",
  phoneHref: "tel:+27796091795",
  hours: "Mon – Fri: 08:00 – 17:00",
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
