import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import NavItem from "../Navbar/NavItem";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:hidden">
            {/* Hamburger Icon */}
            <button 
                onClick={toggleSidebar} 
                className="relative z-50 p-2 focus:outline-none"
                aria-label="Toggle Menu"
            >
                <div className={`w-8 h-1 bg-brand-dark rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : "mb-1.5"}`}></div>
                <div className={`w-8 h-1 bg-brand-dark rounded transition-all duration-300 ${isOpen ? "opacity-0" : "mb-1.5"}`}></div>
                <div className={`w-8 h-1 bg-brand-dark rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>

            {/* Portal for Backdrop & Drawer */}
            {createPortal(
                <div className={`fixed inset-0 z-[9999] pointer-events-none lg:hidden ${isOpen ? "pointer-events-auto" : ""}`}>
                    {/* Backdrop */}
                    <div 
                        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                        onClick={toggleSidebar}
                        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
                    ></div>

                    {/* Sidebar Drawer */}
                    <div 
                        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
                    >
                        <div className="h-full flex flex-col p-8">
                            {/* Header in Drawer */}
                            <div className="mb-10">
                                <span className="text-2xl font-black text-brand-dark tracking-tighter">SCRIBBLE<span className="text-brand-blue">.</span></span>
                            </div>

                            {/* Links */}
                            <nav className="flex-1 flex flex-col gap-6">
                                <div onClick={toggleSidebar}><NavItem nombre={"Home"} to={"/"} /></div>
                                <div onClick={toggleSidebar}><NavItem nombre={"About"} to={"/about"} /></div>
                                <div onClick={toggleSidebar}><NavItem nombre={"Gallery"} to={"/gallery"} /></div>
                                <div onClick={toggleSidebar}><NavItem nombre={"Pricing"} to={"/pricing"} /></div>
                                <div onClick={toggleSidebar}><NavItem nombre={"Contact"} to={"/contact"} /></div>
                            </nav>

                            {/* Footer in Drawer */}
                            <div className="pt-8 border-t border-gray-100">
                                <p className="text-sm text-gray-400 font-medium">
                                    Let's create something awesome.
                                </p>
                                <div className="flex gap-4 mt-4">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">IG</span>
                                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">TK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default SideBar;
