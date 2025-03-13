"use client";

import { useState } from "react";
import featuresTabData from "./featuresTabData";
import FeaturesTabItem from "./FeaturesTabItem";

const FeaturesTab = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === featuresTabData.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? featuresTabData.length - 1 : prevIndex - 1
        );
    };

    // Get the selected feature based on currentIndex
    const selectedVertical = featuresTabData[currentIndex];

    return (
        <section className="relative pb-20 pt-18.5 lg:pb-22.5 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53]">
                    Verticals
                </h2>
                <div className="relative w-full max-w-4xl mx-auto">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-[#0ABF53] text-white rounded-full hover:bg-[#089B45] transition-all shadow-md z-10"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-[#0ABF53] text-white rounded-full hover:bg-[#089B45] transition-all shadow-md z-10"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Feature Card */}
                    <FeaturesTabItem featureTab={selectedVertical} />
                </div>
            </div>
        </section>
    );
};

export default FeaturesTab;
