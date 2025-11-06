
import React from 'react';
import Link from 'next/link';

export default function Availability() {
    return (
        <div className='bg-[#F0F6FA] dark:bg-[#111929] lg:py-24 py-16'>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
                <p className='mb-[16px] text-[24px] sm:text-[36px] justify-center flex font-bold leading-[1.8]'>
                    Financiamiento con planes a meses sin intereses que se ajustan a cualquier presupuesto.
                </p>
                <p className='mb-10 sm:mb-3.75 text-base sm:text-xl text-gray justify-center flex'>
                    Conoce nuestras opciones de financiamiento y elige la que mejor se adapte a ti.
                    En la siguiente tabla te mostramos como quedarían los pagos mensuales según el plazo que elijas.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-center text-sm sm:text-lg text-gray">
                        <thead>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <th className="py-2 sm:py-4 px-2 text-center">Desarrollo</th>
                                <th className="py-2 sm:py-4 px-2 text-center">3 meses</th>
                                <th className="py-2 sm:py-4 px-2 text-center">6 meses</th>
                                <th className="py-2 sm:py-4 px-2 text-center">12 meses</th>
                                <th className="py-2 sm:py-4 px-2 text-center">24 meses</th>
                                <th className="py-2 sm:py-4 px-2 text-center">36 meses</th>
                                <th className="py-2 sm:py-4 px-2 text-center">5 y 10 años</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Nueva Camahuiroa</td>
                                <td className="py-2 sm:py-4 px-2">$30,667</td>
                                <td className="py-2 sm:py-4 px-2">$15,334</td>
                                <td className="py-2 sm:py-4 px-2">$7,667</td>
                                <td className="py-2 sm:py-4 px-2">$3,834</td>
                                <td className="py-2 sm:py-4 px-2">$2,557.5</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/contacto" className='flex items-center justify-center hover:text-primary'>
                                        Saber más
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Nuevo Huatulco</td>
                                <td className="py-2 sm:py-4 px-2">$30,334</td>
                                <td className="py-2 sm:py-4 px-2">$15,167</td>
                                <td className="py-2 sm:py-4 px-2">$7,584</td>
                                <td className="py-2 sm:py-4 px-2">$3,792</td>
                                <td className="py-2 sm:py-4 px-2">$2,527.7</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/contacto" className='flex items-center justify-center hover:text-primary'>
                                        Saber más
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Nuevo Orizaba</td>
                                <td className="py-2 sm:py-4 px-2">$41,334</td>
                                <td className="py-2 sm:py-4 px-2">$20,667</td>
                                <td className="py-2 sm:py-4 px-2">$10,334</td>
                                <td className="py-2 sm:py-4 px-2">$5,167</td>
                                <td className="py-2 sm:py-4 px-2">$3,444.44</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/contacto" className='flex items-center justify-center hover:text-primary'>
                                        Saber más
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Nuevo Paraíso</td>
                                <td className="py-2 sm:py-4 px-2">$30,334</td>
                                <td className="py-2 sm:py-4 px-2">$15,167</td>
                                <td className="py-2 sm:py-4 px-2">$7,584</td>
                                <td className="py-2 sm:py-4 px-2">$3,792</td>
                                <td className="py-2 sm:py-4 px-2">$2,527.78</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/contacto" className='flex items-center justify-center hover:text-primary'>
                                        Saber más
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Hacienda Nápoles 1</td>
                                <td className="py-2 sm:py-4 px-2">$41,000</td>
                                <td className="py-2 sm:py-4 px-2">$20,500</td>
                                <td className="py-2 sm:py-4 px-2">$10,250</td>
                                <td className="py-2 sm:py-4 px-2">$5,125</td>
                                <td className="py-2 sm:py-4 px-2">$3,416.67</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/contacto" className='flex items-center justify-center hover:text-primary'>
                                        Saber más
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Hacienda Nápoles 2</td>
                                <td className="py-2 sm:py-4 px-2">$33,667</td>
                                <td className="py-2 sm:py-4 px-2">$16,834</td>
                                <td className="py-2 sm:py-4 px-2">$8,417</td>
                                <td className="py-2 sm:py-4 px-2">$4,209</td>
                                <td className="py-2 sm:py-4 px-2">$2,805.56</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/contacto" className='flex items-center justify-center hover:text-primary'>
                                        Saber más
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Hacienda Nápoles 3</td>
                                <td className="py-2 sm:py-4 px-2">$33,667</td>
                                <td className="py-2 sm:py-4 px-2">$16,834</td>
                                <td className="py-2 sm:py-4 px-2">$8,417</td>
                                <td className="py-2 sm:py-4 px-2">$4,209</td>
                                <td className="py-2 sm:py-4 px-2">$2,805.56</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/contacto" className='flex items-center justify-center hover:text-primary'>
                                        Saber más
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Cartagena</td>
                                <td className="py-2 sm:py-4 px-2">$30,000</td>
                                <td className="py-2 sm:py-4 px-2">$15,000</td>
                                <td className="py-2 sm:py-4 px-2">$7,500</td>
                                <td className="py-2 sm:py-4 px-2">$3,750</td>
                                <td className="py-2 sm:py-4 px-2">$2,500</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/contacto" className='flex items-center justify-center hover:text-primary'>
                                        Saber más
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Hacienda Mónaco</td>
                                <td className="py-2 sm:py-4 px-2">$30,000</td>
                                <td className="py-2 sm:py-4 px-2">$15,000</td>
                                <td className="py-2 sm:py-4 px-2">$7,500</td>
                                <td className="py-2 sm:py-4 px-2">$3,750</td>
                                <td className="py-2 sm:py-4 px-2">$2,500</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/contacto" className='flex items-center justify-center hover:text-primary'>
                                        Saber más
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Nuevo Celestino</td>
                                <td className="py-2 sm:py-4 px-2">$30,000</td>
                                <td className="py-2 sm:py-4 px-2">$15,000</td>
                                <td className="py-2 sm:py-4 px-2">$7,500</td>
                                <td className="py-2 sm:py-4 px-2">$3,750</td>
                                <td className="py-2 sm:py-4 px-2">$2,500</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/contacto" className='flex items-center justify-center hover:text-primary'>
                                        Saber más
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}