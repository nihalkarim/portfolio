import React from "react";

export default function About() {
    return (
        <div id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                    <div className="mb-4">
                        <h1 className="font-title sm:text-4xl text-3xl mb-4 font-medium text-pink-600">
                            Hi, I'm Nihal ✴
                            <br className="hidden lg:inline-block" /> <span className="text-3xl">Welcome to my website</span>
                        </h1>

                        <p className="leading-relaxed text-lg text-gray-600"> I am a developer with experience in building front end applications and I am passionate about building projects that innovate and streamline user experience. I am always looking for new opportunities to learn and grow in my professional career.</p>
                        <div className="flex inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-pink-600 my-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span className="font-light px-auto pl-2 text-lg text-pink-600">Rochester, NY & Palo Alto, CA</span>
                        </div>

                    </div>


                    <h3 className="text-2xl font-title text-pink-600 mt-4">Background</h3>
                    <p className="mb-4 leading-relaxed text-lg text-gray-600"> While my main focus is in front end development, I also have background in cloud development, backend development, and design. </p>
                    <p className="mb-4 leading-relaxed text-lg text-gray-600"> I recently graduated with a degree in <span className="text-pink-600">New Media Interactive Development, BS</span> from the Rochester Institute of Technology. </p>
                    <p className="mb-4 leading-relaxed text-lg text-gray-600"> I have an <span className="text-pink-600">AWS Certified Cloud Practitioner</span> certification and am currently working to obtain certificated in <span className="text-pink-600">AWS Solutions Architect Associate</span> and <span className="text-pink-600">AWS Certified AI Practitioner</span>. </p>

                    <h3 className="text-2xl font-title text-pink-600 mt-4">What do I do in my free time?</h3>
                    <p className="mb-8 leading-relaxed text-lg text-gray-600"> In my free time, I love spending time with friends, trying new recipes, and traveling. I'm also looking forward to work on some new projects involing databases and computer vision. </p>

                    <div className="flex justify-center">
                        <a
                            href="#projects"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            My Work
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            My Resume
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </div>
    );
}