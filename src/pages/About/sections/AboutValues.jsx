import React from "react";

const AboutValues = () => {
    return (
        <div className="w-full py-16 px-6 border-t border-gray-100">
             <div className="container mx-auto max-w-5xl flex flex-wrap justify-center gap-12 md:gap-24 text-center">
                 {[
                     { 
                         title: "Creativity", 
                         icon: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/nod0mh4uf42aamjozzcx", // Recycled 'The Idea' icon
                         desc: "Always original." 
                     },
                     { 
                         title: "Precision", 
                         icon: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/nj9ol16kuhwa40tlgkfj", // Recycled 'Preview/Sketch' icon which fits precision
                         desc: "Pixel perfect." 
                     },
                     { 
                         title: "Speed", 
                         icon: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/a7n7x7xdq03yfovnjsaf", // Recycled 'Delivery' icon
                         desc: "On time, every time." 
                     }
                 ].map((item, i) => (
                     <div key={i} className="flex flex-col items-center gap-4 group">
                         <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-50 transform group-hover:scale-110 transition-transform duration-300">
                            <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                         </div>
                         <div>
                            <h3 className="font-black text-xl text-brand-dark uppercase tracking-widest mb-1">{item.title}</h3>
                            <p className="text-gray-400 font-bold">{item.desc}</p>
                         </div>
                     </div>
                 ))}
             </div>
        </div>
    );
};

export default AboutValues;
