import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="w-full bg-white text-brand-dark pt-20 pb-10 border-t-4 border-brand-dark relative overflow-hidden">
			<div className="container mx-auto px-6 relative z-10">
				<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
					
                    {/* Brand & Socials Section */}
					<div className="md:w-1/2">
						<Link to="/" className="mb-6 block hover:opacity-80 transition-opacity">
                            <img src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/jrb12jwl8xqarm4vmagj" alt="Scribble Solutions" className="h-12 w-auto" />
                        </Link>
						<p className="text-gray-500 text-lg font-medium max-w-md leading-relaxed mb-8">
							We turn your wild ideas into tangible, colorful reality. Let's create something awesome together.
						</p>
                        
                        <div className="flex gap-4">
                            {/* Social Icons - Clean & Minimal */}
                            <a href="#" className="w-12 h-12 border-2 border-brand-dark rounded-full flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-300 group">
                                <span className="font-bold text-sm">IG</span>
                            </a>
                            <a href="#" className="w-12 h-12 border-2 border-brand-dark rounded-full flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-300 group">
                                <span className="font-bold text-sm">TK</span>
                            </a>
                            <a href="#" className="w-12 h-12 border-2 border-brand-dark rounded-full flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-300 group">
                                <span className="font-bold text-sm">YT</span>
                            </a>
                        </div>
					</div>

                    {/* Explore / Navigation Section */}
					<div className="md:w-auto">
						<h4 className="font-black text-xl mb-8 uppercase tracking-widest text-brand-dark border-b-2 border-brand-yellow inline-block pb-1">Explore</h4>
						<ul className="flex flex-col gap-4 text-xl font-bold">
							<li><Link to="/about" className="hover:text-brand-blue hover:translate-x-2 transition-all duration-300 inline-block">About Us</Link></li>
							<li><Link to="/gallery" className="hover:text-brand-pink hover:translate-x-2 transition-all duration-300 inline-block">The Gallery</Link></li>
							<li><Link to="/pricing" className="hover:text-brand-yellow hover:translate-x-2 transition-all duration-300 inline-block">Pricing</Link></li>
							<li><Link to="/contact" className="hover:text-brand-blue hover:translate-x-2 transition-all duration-300 inline-block">Get in touch</Link></li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t-2 border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-400 gap-4">
					<p>© 2024 Scribble Solutions.</p>
                    <p className="flex items-center gap-1">Made with <span className="text-brand-pink text-lg">♥</span> in Orlando</p>
				</div>
			</div>
            
            {/* Very Subtle Background Watermark */}
            <div className="absolute -bottom-20 -left-20 text-[200px] font-black text-gray-50 opacity-[0.03] pointer-events-none select-none">
                SCRIBBLE
            </div>
		</footer>
	);
};

export default Footer;
