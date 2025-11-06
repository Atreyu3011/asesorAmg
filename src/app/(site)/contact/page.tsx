
import React from "react";
import { Metadata } from "next";
import HeroSub from "@/app/components/shared/hero-sub";
import ContactInfo from "@/app/components/contact/contact-info";
import ContactForm from "@/app/components/contact/form";
import Location from "@/app/components/contact/office-location";
export const metadata: Metadata = {
  title: "Contacto",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Inicio" },
    { href: "/contacto", text: "Contacto" },
  ];
  return (
    <>
      <HeroSub
        title="Contacto"
        description="¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte!"
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <Location />
    </>
  );
};

export default page;
