import React from "react";

const PricingVolume = () => {
    return (
        <div className="w-full py-16 px-6 relative overflow-hidden">
             {/* Background Organic Shape */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-yellow/10 -rotate-3 rounded-[30%] -z-10"></div>

             <div className="container mx-auto max-w-4xl bg-white rounded-[40px] shadow-xl p-8 md:p-12 relative">
                {/* Hand-drawn Tape Effect at top */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-brand-yellow/40 rotate-1"></div>

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">Volume Discounts</h2>
                    <p className="text-lg text-gray-500">Ordering for a team, event, or brand? Save big when you buy bulk.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="bg-gray-50 rounded-2xl p-6">
                        <ul className="space-y-4">
                            {[
                                { qty: "50 - 99 units", discount: "5% OFF" },
                                { qty: "100 - 499 units", discount: "10% OFF" },
                                { qty: "500 - 999 units", discount: "15% OFF" },
                                { qty: "1000+ units", discount: "20% OFF" },
                            ].map((tier, i) => (
                                <li key={i} className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                                    <span className="font-bold text-gray-600">{tier.qty}</span>
                                    <span className="font-black text-brand-green text-xl">{tier.discount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">Need a wholesale partner?</h3>
                        <p className="text-gray-500 mb-6">We work with agencies, artists, and retailers to provide consistent, high-quality manufacturing.</p>
                        <a href="/contact" className="inline-block px-8 py-3 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-pink transition-colors">
                            Apply for Wholesale
                        </a>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default PricingVolume;
