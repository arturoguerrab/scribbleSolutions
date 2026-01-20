import React from "react";

const StepCard = ({ number, title, desc, color }) => (
    <div className="flex flex-col items-center text-center relative z-10">
        <div className={`w-16 h-16 ${color} text-white font-black text-2xl flex items-center justify-center rounded-full mb-4 shadow-lg`}>
            {number}
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
        <p className="text-gray-500 text-sm max-w-xs">{desc}</p>
    </div>
);

const PricingSteps = () => {
    return (
        <div className="w-full py-20 px-6 bg-white overflow-hidden">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-3xl font-black text-brand-dark mb-16">How it Works</h2>
                
                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-1 border-t-4 border-dashed border-gray-200 -z-10"></div>
                    
                    <StepCard 
                        number="1" 
                        title="Choose Product" 
                        desc="Select from our catalog or request a custom quote." 
                        color="bg-brand-blue"
                    />
                     <StepCard 
                        number="2" 
                        title="Upload Design" 
                        desc="Send us your art. We verify it's print-ready." 
                        color="bg-brand-pink"
                    />
                     <StepCard 
                        number="3" 
                        title="Approve Proof" 
                        desc="We send you a digital or physical proof to confirm." 
                        color="bg-brand-yellow"
                    />
                     <StepCard 
                        number="4" 
                        title="Production" 
                        desc="We craft your order and ship it straight to you." 
                        color="bg-brand-green"
                    />
                </div>
            </div>
        </div>
    );
};

export default PricingSteps;
