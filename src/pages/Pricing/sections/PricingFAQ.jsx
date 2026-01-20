import React, { useState } from "react";

const faqs = [
    {
        q: "Do you have a minimum order quantity (MOQ)?",
        a: "For stickers, our MOQ is 50 units. For apparel, it's 12 units. Laser cutting services do not have a hard minimum, but setup fees may apply for single items."
    },
    {
        q: "What is your standard turnaround time?",
        a: "Standard production time is 5-7 business days after proof approval. Rush options (2-3 days) are available for an additional fee."
    },
    {
        q: "Can you help with design?",
        a: "Absolutely! We offer basic file setup for free. For full creative services (logo design, illustration), we have simple hourly rates."
    },
    {
        q: "Do you ship internationally?",
        a: "Yes, we ship worldwide! Shipping costs and times vary based on location. Customs fees are the responsibility of the recipient."
    }
];

const FAQItem = ({ faq, isOpen, toggle }) => (
    <div className="border-b border-gray-200 last:border-0">
        <button 
            onClick={toggle}
            className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        >
            <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-pink' : 'text-brand-dark group-hover:text-brand-blue'}`}>
                {faq.q}
            </span>
            <span className={`transform transition-transform duration-300 font-bold text-2xl ${isOpen ? 'rotate-45 text-brand-pink' : 'text-gray-300'}`}>
                +
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-500 leading-relaxed max-w-2xl">{faq.a}</p>
        </div>
    </div>
);

const PricingFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full py-20 px-6 bg-gray-50">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-5xl font-black text-brand-dark relative inline-block">
                        Questions?
                        <svg className="absolute -top-6 -right-8 w-12 h-12 text-brand-blue rotate-[20deg]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
                             <path d="M25,5 Q40,20 25,40" />
                             <circle cx="25" cy="45" r="2" fill="currentColor" />
                        </svg>
                    </h2>
                </div>

                <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-sm">
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index} 
                            faq={faq} 
                            isOpen={openIndex === index} 
                            toggle={() => setOpenIndex(index === openIndex ? -1 : index)} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingFAQ;
