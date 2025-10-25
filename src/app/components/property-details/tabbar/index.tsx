"use client";
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

// Define the type for each tab's content
type TabContent = {
    title: string;
    description: string;
    features: string[];
    image: string;
};

// Define possible tab labels
type TabLabel = 'Amenidades exclusivas' | 'Servicios' | 'Ubicaciones privilegiadas' | 'Lo mejor de lo mejor';

// Define the content object with explicit types
const content: Record<TabLabel, TabContent> = {
    'Amenidades exclusivas': {
        title: 'Disfruta de momentos únicos con tu familia',
        description: 'Al adquirir un terreno con nosotros tu familia podrá disfrutar de :',
        features: [
            'Asadores',
            'Pergolas',
            'Palapas',
            'Areas de juegos infantiles',
            'Caseta de vigilancia',
            'Entre otras amenidades que se ajustan a la personalidad de cada desarrollo'
        ],
        image: '/images/tabbar/tab-1.jpg'
    },
    'Servicios': {
        title: 'Servicios diseñados para tu comodidad',
        description: 'Nuestros desarrollos cuentan con una variedad de servicios para garantizar tu bienestar y el de tu familia:',
        features: ['Vigilancia 24/7', 'Mantenimiento de calles y áreas comunes', 'Agua potable', 'Acceso controlado'],
        image: '/images/tabbar/tab-2.jpg'
    },
    'Ubicaciones privilegiadas': {
        title: 'Plusvalía y comodidad en un solo lugar',
        description: 'Nuestros desarrollos están estratégicamente ubicados para ofrecerte lo mejor en plusvalía y comodidad:',
        features: ['Tu tranquilidad es nuestras prioridad', 'Cercanía a centros urbanos', 'Entornos naturales'],
        image: '/images/tabbar/tab-3.jpg'
    },
    'Lo mejor de lo mejor': {
        title: 'Invierte en un futuro próspero',
        description: 'Descubre en cada uno de nuestros desarrollos terrenos exclusivos, con ubicaciones estratégicas y dimensiones ideales. Un producto premium creado para quienes no se conforman con menos que lo mejor.',
        features: ['Mayores dimenciones', 'Ubicaciones privilegiadas'],
        image: '/images/tabbar/tab-4.jpg'
    }
};

// Define the tabs
const tabs: { label: TabLabel, icon: string }[] = [
    { label: 'Amenidades exclusivas', icon: 'mdi:home' },
    { label: 'Servicios', icon: 'mdi:store' },
    { label: 'Ubicaciones privilegiadas', icon: 'mdi:building' },
    { label: 'Lo mejor de lo mejor', icon: 'mdi:warehouse' }
];

// Utility function to chunk an array into smaller arrays of a specified size
const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

export default function Tabbar() {
    const [activeTab, setActiveTab] = useState<TabLabel>('Amenidades exclusivas');

    const handleTabChange = (tab: TabLabel) => {
        setActiveTab(tab);
    };

    return (
        <section className='dark:bg-darkmode'>
            <div className='max-w-screen-xl mx-auto'>
                <div className="flex flex-wrap justify-center gap-1 bg-transparent" role="tablist">
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            className={`px-4 py-2 text-lg rounded-t-md focus:outline-none flex items-center justify-center
                            ${activeTab === tab.label ? 'text-primary border-b-2 border-primary' : 'text-gray transition duration-300 hover:text-primary'
                                }`}
                            onClick={() => handleTabChange(tab.label)}
                            role="tab"
                            aria-selected={activeTab === tab.label}
                            aria-controls={`content-${tab.label}`}
                        >
                            <span className="hidden sm:flex">{tab.label}</span>
                            <span className="sm:hidden">
                                <Icon icon={tab.icon} />
                            </span>
                        </button>
                    ))}
                </div>

                <div className="rounded-b-lg rounded-tr-lg">
                    {tabs.map((tab) => (
                        <div
                            key={tab.label}
                            id={`content-${tab.label}`}
                            role="tabpanel"
                            className={`max-w-screen-xl mt-11 mx-auto ${activeTab === tab.label ? 'block' : 'hidden'}`}
                        >
                            <div className="max-w-6xl mx-auto" data-aos='fade-up'>
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 px-4 flex flex-col justify-center">
                                        <p className='md:text-4xl text-[28px] leading-[1.2] text-midnight_text dark:text-white font-bold'>
                                            {content[tab.label]?.title}
                                        </p>
                                        <p className='my-6 text-gray text-lg'>
                                            {content[tab.label]?.description}
                                        </p>
                                        <table className="w-full text-base text-gray">
                                            <tbody>
                                                {chunkArray(content[tab.label]?.features || [], 3).map((chunk, chunkIndex) => (
                                                    <tr key={chunkIndex}>
                                                        {chunk.map((feature, featureIndex) => (
                                                            <td key={featureIndex} className="pr-4 py-2">
                                                                <div className='flex items-center w-fit'>
                                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                    {feature}
                                                                </div>
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="lg:w-1/2 h-[450px] md:block hidden px-4">
                                        <Image
                                            src={content[tab.label]?.image || '/images/blog/blog-1.jpg'}
                                            alt={`Image for ${tab.label}`}
                                            width={570}
                                            height={367}
                                            className='rounded-lg w-full h-full'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
