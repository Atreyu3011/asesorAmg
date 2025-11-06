import { NextResponse } from "next/server";

const headerData = [
  { label: "Inicio", href: "/" },
  {
    label: "Desarrollos",
    href: "/properties/properties-list",
    // submenu: [
    //   { label: "Conoce nuestros desarrollos", href: "/properties/properties-list" },
    //   // { label: "Property Details", href: "/properties/properties-list/modern-apartment" },
    // ],
  },
  // {
  //   label: "Blogs",
  //   href: "#",
  //   submenu: [
  //     { label: "Blog Grid", href: "/blogs" },
  //     { label: "Blog Details", href: "/blogs/blog_1" },
  //   ],
  // },
  { label: "Contacto", href: "/contacto" },
  // { label: "Documentation", href: "/documentation" },
];

export const GET = async () => {
  return NextResponse.json({
    headerData
  });
};

