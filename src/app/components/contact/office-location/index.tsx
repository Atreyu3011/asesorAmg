"use client";
import React from "react";
import Link from "next/link";

const Location = () => {
  // Función para rastrear conversiones de Google Ads
  const trackConversion = (conversionLabel: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17780853225/' + conversionLabel,
        'value': 1.0,
        'currency': 'MXN'
      });
    }
  };

  // Handler para clics en teléfono
  const handlePhoneClick = () => {
    trackConversion('phone_click');
  };
  const breadcrumbLinks = [
    { href: "/", text: "Inicio" },
    { href: "/contacto", text: "Contacto" },
  ];
  return (
    <>
      <section className="bg-primary lg:py-24 py-16 px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
            <div className="">
                <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-solid border-white border-opacity-50 pb-11">
                    <div className="col-span-3">
                        <h2 className="text-white text-4xl leading-[1.2] font-bold">Los Mochis, Sinaloa.</h2>
                    </div>
                    <div className="col-span-3">
                        <p className="text-xl text-IceBlue font-normal max-w-64 text-white text-opacity-50">Av. Aquiles Serdán 9, Centro, 81200 Los Mochis, Sinaloa.</p>
                    </div>
                    <div className="col-span-3">
                        <Link href="mailto:headoffice@property.com" className="text-xl text-white font-medium underline">AsesorAMG@gmail.com</Link>
                        <Link href="tel:6681688415" onClick={handlePhoneClick} className="text-xl text-white text-opacity-80 flex items-center gap-2 hover:text-opacity-100 w-fit"><span className="text-white !text-opacity-40">Teléfono</span>668 168 8415</Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 pt-12">
                    <div className="col-span-3">
                        <h2 className="text-white text-4xl leading-[1.2] font-bold">Dí que vas de parte mía</h2>
                    </div>
                    <div className="col-span-3">
                        <p className="text-xl text-white text-opacity-50 font-normal max-w-64">Te regalamos 1 boleto para la rifa de un terreno</p>
                    </div>
                    <div className="col-span-3">
                        <Link href="mailto:Office@property.com" className="text-xl text-white font-medium underline">AsesorAMG@gmail.com</Link>
                        <Link href="tel:6681688415" onClick={handlePhoneClick} className="text-xl text-white text-opacity-80 text-IceBlue flex items-center gap-2 hover:text-opacity-100 w-fit"><span className="text-white !text-opacity-40">Teléfono</span>668 168 8415</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Location;
