import React from "react";

const services = [
    {
        title: "Laser Cutting",
        desc: "Precision cutting for wood, acrylic, and leather. If you can draw it, we can cut it.",
        color: "bg-brand-blue",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "Sublimation",
        desc: "Vibrant, full-color printing on mugs, shirts, metals, and more. Durable and vivid.",
        color: "bg-brand-pink",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        )
    },
    {
        title: "Vinyl & Stickers",
        desc: "Custom decals for walls, cars, laptops, or bulk sticker orders for your brand.",
        color: "bg-brand-yellow",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        )
    }
];

const AboutServices = () => {
    return (
        <div className="w-full py-20 px-6 bg-gray-50/50">
            <div className="container mx-auto max-w-6xl">
                 <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
                     <div>
                        <span className="text-brand-pink font-bold uppercase tracking-wider text-sm block md:inline">Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-dark mt-2">What We Do</h2>
                     </div>
                     <p className="text-gray-500 max-w-md font-medium">
                         We combine traditional craftsmanship with modern technology to create unique products.
                     </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {services.map((service, index) => (
                         <div key={index} className="group cursor-default">
                             <div className="relative overflow-hidden bg-white p-8 rounded-[30px] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-start gap-6 hover:-translate-y-2">
                                 {/* Colored Accent Circle */}
                                 <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform duration-300`}>
                                     {service.icon}
                                 </div>
                                 
                                 <div>
                                     <h3 className="text-2xl font-bold text-brand-dark mb-3">{service.title}</h3>
                                     <p className="text-gray-500 leading-relaxed font-medium">
                                         {service.desc}
                                     </p>
                                 </div>

                                 {/* Decorative Corner Scribble */}
                                 <svg className={`absolute -bottom-4 -right-4 w-20 h-20 opacity-10 ${service.color.replace('bg-', 'text-')} transition-opacity duration-300 group-hover:opacity-20`} fill="currentColor" viewBox="0 0 100 100">
                                     <circle cx="50" cy="50" r="50" />
                                 </svg>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </div>
    );
};

export default AboutServices;
