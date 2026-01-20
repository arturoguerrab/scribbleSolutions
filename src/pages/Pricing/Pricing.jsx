import React from "react";
import PricingHero from "./sections/PricingHero";
import PricingCatalog from "./sections/PricingCatalog";
import PricingVolume from "./sections/PricingVolume";
import PricingSteps from "./sections/PricingSteps";
import PricingFAQ from "./sections/PricingFAQ";

const Pricing = () => {
    return (
        <div className="bg-white min-h-screen w-full flex flex-col">
            <PricingHero />
            <PricingCatalog />
            <PricingVolume />
            <PricingSteps />
            <PricingFAQ />
        </div>
    );
};

export default Pricing;
