import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-brand-200 h-[100px] relative z-50 mb-5">
            <nav className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between md:justify-center">
                <div className="text-white font-bold text-xl md:hidden"></div>

                {/* Desktop Menu */}
                <div className="hidden md:flex justify-center gap-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-white ">
                    <Link
                        to="/"
                        className="text-white transition-colors duration-300 hover:text-orange-400"
                    >
                        CV
                    </Link>
                    <span className="text-black">|</span>
                    <Link
                        to="/projects"
                        className="text-white transition-colors duration-300 hover:text-orange-400"
                    >
                        Projects
                    </Link>
                    <span className="text-black">|</span>
                    <Link
                        to="/art"
                        className="text-white transition-colors duration-300 hover:text-orange-400"
                    >
                        Art
                    </Link>
                </div>

                {/* Right Side Container */}
                <div className="flex items-center gap-4 md:absolute md:right-8">
                    <LanguageSwitcher />

                    {/* Hamburger Icon */}
                    <div
                        className="md:hidden text-white cursor-pointer"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-[100px] left-0 w-full bg-brand-200 flex flex-col items-center gap-6 py-8 shadow-lg md:hidden">
                    <Link
                        to="/"
                        className="text-white text-xl hover:text-brand-400 transition-colors"
                        onClick={toggleMenu}
                    >
                        CV
                    </Link>
                    <Link
                        to="/projects"
                        className="text-white text-xl hover:text-brand-400 transition-colors"
                        onClick={toggleMenu}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/art"
                        className="text-white text-xl hover:text-brand-400 transition-colors"
                        onClick={toggleMenu}
                    >
                        Art
                    </Link>
                </div>
            )}
        </header>
    );
};