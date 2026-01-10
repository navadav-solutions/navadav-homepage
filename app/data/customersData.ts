import { getAssetPath } from "@/app/utils/assets";
import { CustomerData } from "../types/customerTypes";


export const customersData: CustomerData[] = [
  {
    id: 1,
    quote: "We love navadav! Our designers were using it for their projects, so clients already knew what navadav was and how to use it.",
    author: "Jenn Wilson",
    role: "Co-founder de",
    company: "Amazon",
    companyLogo: getAssetPath("/images/misc/amazon-badge.png"),
    backgroundImage: getAssetPath("/images/testimonials/background.png"),
  },
  {
    id: 2,
    quote: "Navadav transformed our business operations. Their custom solutions perfectly fit our workflow and have significantly improved our efficiency.",
    author: "Carlos Mendoza",
    role: "CEO de",
    company: "TechCorp",
    companyLogo: getAssetPath("/images/misc/amazon-badge.png"),
    backgroundImage: getAssetPath("/images/testimonials/background.png"),
  },
  {
    id: 3,
    quote: "The team at Navadav understands business needs like no other. They delivered exactly what we needed, on time and with exceptional quality.",
    author: "Sarah Johnson",
    role: "Directora de",
    company: "Innovate Solutions",
    companyLogo: getAssetPath("/images/misc/amazon-badge.png"),
    backgroundImage: getAssetPath("/images/testimonials/background.png"),
  },
];
