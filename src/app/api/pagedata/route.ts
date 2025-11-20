import { NextResponse } from "next/server";

const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

const features = [
    {
        id: 1,
        imgSrc: "/images/features/rating.svg",
        title: "Entrega inmediata",
        description: "Nuestros terrenos están listos para ser adquiridos y desarrollados de inmediato, lo que le permite comenzar su proyecto sin demoras."
    },
    {
        id: 2,
        imgSrc: "/images/features/Give-Women's-Rights.svg",
        title: "Seguridad jurídica",
        description: "La compra de su terreno está respaldada por un contrato legalmente vinculante que protege sus derechos como comprador."
    },
    {
        id: 3,
        imgSrc: "/images/features/live-chat.svg",
        title: "Atención personalizada",
        description: "Nuestro equipo de atención al cliente está disponible para responder a sus preguntas y brindarle asesoramiento personalizado en cada etapa del proceso."
    }
];

const searchOptions = {
    keywords: [
        { value: '', label: 'Palabras clave', placeholder: 'Palabras clave' },
        // Add more keyword options as needed
    ],
    locations: [
        { value: '', label: 'Ubicación' }, // Placeholder option
        { value: 'Huatabampo, Sonora', label: 'Huatabampo, Sonora' },
        { value: 'San Blas, El Fuerte, Sinaloa', label: 'San Blas, El Fuerte, Sinaloa' },
        { value: 'Mazatlán, Sinaloa', label: 'Mazatlán, Sinaloa' },
        { value: 'Santa María Huatulco, Oaxaca', label: 'Santa María Huatulco, Oaxaca' },
        { value: 'Celestino Gasca, La Cruz de Elota, Sinaloa', label: 'Celestino Gasca, La Cruz de Elota, Sinaloa' },
    ],
    category : [
        { value:'', label: 'Nombre del desarrollo' },
        { value:'Nueva Camahuiroa', label: 'Nueva Camahuiroa' },
        { value:'Nuevo Paraíso', label: 'Nuevo Paraíso' },
        { value:'Nuevo Orizaba', label: 'Nuevo Orizaba' },
        { value:'Cartagena', label: 'Cartagena' },
        { value:'Nuevo Huatulco', label: 'Nuevo Huatulco' },
        { value:'Hacienda Mónaco', label: 'Hacienda Mónaco' },
        { value:'Hacienda Nápoles 1', label: 'Hacienda Nápoles 1' },
        { value:'Hacienda Nápoles 2', label: 'Hacienda Nápoles 2' },
        { value:'Hacienda Nápoles 3', label: 'Hacienda Nápoles 3' },
        { value:'Nuevo Celestino', label: 'Nuevo Celestino' },
    ],
    // Define other options similarly
};

const data = [
    {
        src: "https://svgshare.com/i/187L.svg",
        src1: "https://svgshare.com/i/183P.svg",
        alt: "Image 1",
        name: "Apartment",
        count: 35,
    },
    {
        src: "https://svgshare.com/i/188i.svg",
        src1: "https://svgshare.com/i/185B.svg",
        alt: "Image 2",
        name: "Villa",
        count: 15,
    },
    {
        src: "https://svgshare.com/i/186r.svg",
        src1: "https://svgshare.com/i/185n.svg",
        alt: "Image 3",
        name: "Office",
        count: 26,
    },
    {
        src: "https://svgshare.com/i/187Z.svg",
        src1: "https://svgshare.com/i/184b.svg",
        alt: "Image 4",
        name: "Shop",
        count: 43,
    },
    {
        src: "https://svgshare.com/i/1881.svg",
        src1: "https://svgshare.com/i/183k.svg",
        alt: "Image 5",
        name: "House",
        count: 95,
    },
    {
        src: "https://svgshare.com/i/188C.svg",
        src1: "https://svgshare.com/i/184d.svg",
        alt: "Image 6",
        name: "Warehouse",
        count: 18,
    },
];

export const GET = async () => {
  return NextResponse.json(
    {
      menuItems,
      features,
      searchOptions,
      data
    },
    {
      headers: {
        'Access-Control-Allow-Origin': 'https://www.asesorejidal.com',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
};

export const OPTIONS = async () => {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://www.asesorejidal.com',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
};