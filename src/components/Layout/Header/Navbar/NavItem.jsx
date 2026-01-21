import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ nombre, to }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`relative group flex flex-col items-center top-1 ${
					isActive ? "text-brand-dark" : "text-gray-500 hover:text-brand-dark"
				} transition-colors duration-300`
			}
		>
			{({ isActive }) => (
				<>
					<span className="relative z-10">{nombre}</span>
					
                    {/* Scribble Underline (SVG) */}
                    <div className={`absolute -bottom-2 w-full h-3 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>
                        <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                            <path 
                                d="M0,10 Q25,20 50,10 T100,10" 
                                fill="none" 
                                stroke={isActive ? "var(--color-brand-blue)" : "var(--color-brand-pink)"} 
                                strokeWidth="5" 
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
				</>
			)}
		</NavLink>
	);
};

export default NavItem;