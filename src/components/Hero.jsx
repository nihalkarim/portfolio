import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        //flex md:flex-row flex-col items-center
        <div className="min-w-full h-screen bg-pink-200">
            <Navbar />
            <div className="animate-floating font-dyna text-12xl font-bold flex justify-start items-center flex-col p-0 " >
                <div className="flex justify-center items-center text-pink-500">
                    <span className="px-2 cursor-pointer transition font-weight duration-300 ease-in delay-100 animate-floatingSecondary animate-tilting2">n</span>
                    <span className="px-2 cursor-pointer transition font-weight duration-300 ease-in delay-200 animate-floatingSecondary animate-tilting2">i</span>
                    <span className="px-2 cursor-pointer transition font-weight duration-300 ease-in delay-300 animate-floatingSecondary animate-tilting2">h</span>
                    <span className="px-2 cursor-pointer transition font-weight duration-[400ms] ease-in delay-300 animate-floatingSecondary animate-tilting2">a</span>
                    <span className="px-2 cursor-pointer transition font-weight duration-300 ease-in delay-500 animate-floatingSecondary animate-tilting2">l</span>
                </div>
                <div className="flex justify-center items-center animate-tilting ml-8 text-pink-600">
                    <span className="px-2 cursor-pointer transition font-weight duration-300 ease-in delay-200 animate-floatingSecondary animate-tilting2">k</span>
                    <span className="px-2 cursor-pointer transition font-weight duration-300 ease-in delay-300 animate-floatingSecondary animate-tilting2">a</span>
                    <span className="px-2 cursor-pointer transition font-weight duration-300 ease-in delay-[400ms] animate-floatingSecondary animate-tilting2">r</span>
                    <span className="px-2 cursor-pointer transition font-weight duration-[400ms] ease-in delay-500 animate-floatingSecondary animate-tilting2">i</span>
                    <span className="px-2 cursor-pointer transition font-weight duration-300 ease-in delay-[600ms] animate-floatingSecondary animate-tilting2">m</span>
                </div>
            </div>

            <div className="flex justify-center items-end mt-36">
                <a href='#about'>
                    <svg className="h-9 w-9 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </a>
            </div>

            {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" style={{ color: "#db2777", }} />s */}
        </div>
    );
}