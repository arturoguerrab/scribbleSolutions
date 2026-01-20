import React from "react";
import GalleryHero from "./sections/GalleryHero";
import GalleryGrid from "./sections/GalleryGrid";
import GalleryCategories from "./sections/GalleryCategories";
import GalleryCTA from "./sections/GalleryCTA";

const Gallery = () => {
	return (
		<div className="bg-white min-h-screen w-full flex flex-col">
			<GalleryHero />
            <GalleryGrid />
            <GalleryCategories />
            <GalleryCTA />
		</div>
	);
};

export default Gallery;
