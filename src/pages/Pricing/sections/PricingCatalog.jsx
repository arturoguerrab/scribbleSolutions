import React from "react";

const products = [
    {
        id: 1,
        title: "Stickers",
        price: "$0.50",
        unit: "/ unit",
        moq: "50 units",
        color: "bg-brand-blue",
        details: ["Die-cut & Kiss-cut", "Waterproof & UV resistant", "Matte, Glossy or Holo", "Free proofs"]
    },
    {
        id: 2,
        title: "Apparel",
        price: "$15.00",
        unit: "/ unit",
        moq: "12 units",
        color: "bg-brand-pink",
        badge: "Most Popular",
        details: ["T-Shirts, Hoodies, Caps", "Screen Print or DTG", "Premium Cotton Blends", "Bulk discounts available"]
    },
    {
        id: 3,
        title: "Laser Cutting",
        price: "Custom",
        unit: "",
        moq: "No minimum",
        color: "bg-brand-yellow",
        details: ["Wood, Acrylic, Leather", "Precise Engraving", "Large format available", "Rapid prototyping"]
    }
];

const PricingCatalog = () => {
    return (
        <div className="w-full py-16 px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="relative group">
                             {/* Hover Shadow Effect */}
                             <div className={`absolute inset-0 rounded-[40px] ${product.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10`}></div>
                             
                            <div className="relative bg-white border-2 border-brand-dark/5 rounded-[30px] p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                                {product.badge && (
                                    <div className="absolute -top-4 right-8 bg-brand-pink text-white font-bold px-4 py-1 rounded-full text-sm shadow-md rotate-3">
                                        {product.badge}
                                    </div>
                                )}
                                
                                <div className={`w-16 h-16 ${product.color} rounded-2xl mb-6 flex items-center justify-center`}>
                                   {/* Icon Placeholder */}
                                   <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                                </div>
                                
                                <h3 className="text-2xl font-black text-brand-dark mb-2">{product.title}</h3>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-4xl font-black text-brand-dark">{product.price}</span>
                                    <span className="text-gray-500 font-medium">{product.unit}</span>
                                </div>
                                <p className="text-sm text-gray-400 font-bold uppercase tracking-wide mb-6">MOQ: {product.moq}</p>
                                
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {product.details.map((detail, index) => (
                                        <li key={index} className="flex items-center gap-3 text-brand-dark/80 font-medium">
                                            <svg className={`w-5 h-5 ${product.color.replace('bg-', 'text-')}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                                
                                <button className="w-full py-3 rounded-xl border-2 border-brand-dark font-bold text-brand-dark hover:bg-brand-dark hover:text-white transition-colors">
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingCatalog;
