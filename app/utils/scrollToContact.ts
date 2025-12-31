"use client";

export function scrollToContact() {
  const contactSection = document.getElementById("contact-form");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
