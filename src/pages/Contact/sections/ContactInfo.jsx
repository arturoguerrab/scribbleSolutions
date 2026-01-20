import React from "react";

const ContactInfoItems = ({ icon, title, value, color }) => (
    <div className="flex items-start gap-4">
        <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-brand-dark text-lg">{title}</h4>
            <p className="text-gray-500 font-medium">{value}</p>
        </div>
    </div>
);

const ContactInfo = () => {
    return (
        <div className="w-full py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Contact Details */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-4xl font-black text-brand-dark mb-4">Drop by our Studio</h2>
                            <p className="text-lg text-gray-500 max-w-md">
                                Whether you have a question about materials, pricing, or just want to see samples, we'd love to chat.
                            </p>
                        </div>

                        <div className="space-y-8">
                             <ContactInfoItems 
                                color="bg-brand-blue"
                                title="Location"
                                value="Orlando, FL"
                                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                             />
                             <ContactInfoItems 
                                color="bg-brand-pink"
                                title="Email Us"
                                value="hello@scribblesolutions.com"
                                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                             />
                              <ContactInfoItems 
                                color="bg-brand-yellow"
                                title="Call Us"
                                value="(407) 123-4567"
                                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                             />
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="relative">
                        {/* Tape Effect */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-10 bg-brand-yellow/30 rotate-2 z-10 hidden md:block"></div>
                        
                        <div className="w-full h-80 md:h-96 rounded-[30px] overflow-hidden shadow-2xl border-[6px] border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                             <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.68478494921!2d-81.4429735497217!3d28.53833549642598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1705353000000!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>

                         {/* Decorative Scribble */}
                        <svg className="absolute -bottom-8 -right-8 w-24 h-24 text-brand-blue -z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                              <path d="M10,50 Q30,10 50,50 T90,50" />
                              <circle cx="80" cy="20" r="5" fill="currentColor" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
