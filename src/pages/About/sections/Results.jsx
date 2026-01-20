import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const Results = () => {
	return (
		<div className="text-center pt-7">
            <span className="text-sm">We’re Scribble, a family</span>
            <h2 className="font-bold text-2xl pb-8">Our products & results</h2>
			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/h9uc6ejsdchkrilmb1dv"
						alt=""
						className="h-full"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/h9uc6ejsdchkrilmb1dv"
						alt=""
						className="h-full"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/h9uc6ejsdchkrilmb1dv"
						alt=""
						className="h-full"
					/>
				</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
            <p className="pt-6">Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, fugit aut. Atque.</p>
            <p>We’re Scribble, a family business hsdawhd</p>
		</div>
	);
};

export default Results;
