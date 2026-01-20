import React from "react";

const InputField = ({ label, type = "text", placeholder }) => (
    <div className="flex flex-col gap-2">
        <label className="font-bold text-brand-dark text-sm uppercase tracking-wide">{label}</label>
        <input 
            type={type} 
            placeholder={placeholder}
            className="w-full bg-transparent border-b-2 border-gray-200 focus:border-brand-blue py-3 outline-none transition-colors duration-300 font-medium placeholder-gray-300"
        />
    </div>
);

const ContactForm = () => {
    return (
        <div className="w-full py-10 px-6">
            <div className="container mx-auto max-w-4xl">
                 <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 relative overflow-visible">
                    {/* Decorative Scribble */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-pink/10 rounded-full blur-2xl -z-10"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl -z-10"></div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <InputField label="Name" placeholder="Your name" />
                        <InputField label="Email" type="email" placeholder="you@example.com" />
                        
                        <div className="flex flex-col gap-2 md:col-span-2">
                             <label className="font-bold text-brand-dark text-sm uppercase tracking-wide">Service Interest</label>
                             <select className="w-full bg-transparent border-b-2 border-gray-200 focus:border-brand-blue py-3 outline-none transition-colors duration-300 font-medium text-gray-600 bg-white">
                                <option>General Inquiry</option>
                                <option>Stickers & Decals</option>
                                <option>Apparel & Merch</option>
                                <option>Laser Cutting</option>
                                <option>Design Services</option>
                             </select>
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="font-bold text-brand-dark text-sm uppercase tracking-wide">Message</label>
                            <textarea 
                                rows="4" 
                                placeholder="Tell us about your project..."
                                className="w-full bg-gray-50 rounded-xl border-none p-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all duration-300 font-medium resize-none placeholder-gray-300"
                            ></textarea>
                        </div>

                        <div className="md:col-span-2 flex justify-end mt-4">
                            <button className="px-10 py-4 bg-brand-dark text-white font-bold rounded-full text-lg hover:bg-brand-blue transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </div>
                    </form>
                 </div>
            </div>
        </div>
    );
};

export default ContactForm;
