import React from "react";

export default function Navbar() {
    return (
        <header className="md:sticky top-0 z-10 min-w-full">
            <div className="min-w-4/5 container flex flex-wrap py-5 flex-col md:flex-row items-center title-font font-medium font-dyna text-pink-500">
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center justify-center">
                    <a href="#about" className="hover:text-pink-700 hover:border-b-4 hover:border-pink-700 mt-4 md:mt-0 flex justify-end items-center" >
                        About
                    </a>
                    <a href="#projects" className="mx-5 hover:text-pink-700 hover:border-b-4 hover:border-pink-700 mt-4 md:mt-0 flex justify-end items-center">
                        Projects
                    </a>
                </nav>
                {/* inline-flex items-center */}
                <a href="#contact" className="mt-4 md:mt-0 flex justify-end items-center hover:text-pink-700 hover:border-b-4 hover:border-pink-700">
                    Contact Me
                </a>
            </div>
        </header>
    );
}