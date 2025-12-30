import { ListTestimonials } from "../types/listTestimonialsTypes";
import { getAssetPath } from "../utils/assets";

export const listTestimonials: ListTestimonials[] = [
  {
    id: 1,
    name: "How to write content about your photographs",
    date: "April 09,  2022",
    imageSrc: getAssetPath("/images/testimonials/avatar-1.png"),
  },
  {
    id: 2,
    name: "How to write content about your photographs",
    date: "April 09,  2022",
    imageSrc: getAssetPath("/images/testimonials/avatar-2.png"),
  },
  {
    id: 3,
    name: "How to write content about your photographs",
    date: "April 09,  2022",
    imageSrc: getAssetPath("/images/testimonials/avatar-3.png"),
  },
  {
    id: 4,
    name: "How to write content about your photographs",
    date: "April 09,  2022",
    imageSrc: getAssetPath("/images/testimonials/avatar-4.png"),
  },
]