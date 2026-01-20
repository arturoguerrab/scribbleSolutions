import React from "react";
import ContactHero from "./sections/ContactHero";
import ContactForm from "./sections/ContactForm";
import ContactInfo from "./sections/ContactInfo";

const Contact = () => {
    return (
        <div className="bg-white min-h-screen w-full flex flex-col">
            <ContactHero />
            <ContactForm />
            <ContactInfo />
        </div>
    );
};

export default Contact;
