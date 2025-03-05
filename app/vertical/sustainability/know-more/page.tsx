import Image from "next/image";

export default function SustainabilityKnowMore() {
    return (
        <section className="py-16 px-6 md:px-12">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-[#0ABF53] mb-6">
                    Learn More About Sustainability
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/images/sustainability_analytics.jpg"
                            alt="Sustainability Analytics"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side - Description */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our sustainability solutions leverage AI-driven insights to provide comprehensive strategies
                            for energy efficiency, carbon footprint reduction, and resource optimization.
                        </p>

                        <p className="mt-4 text-gray-600">
                            We help businesses adopt environmentally friendly approaches while maintaining economic viability.
                            Our platform transforms sustainability challenges into opportunities for smarter, greener growth.
                        </p>

                        <button className="mt-6 px-6 py-2 bg-[#0ABF53] text-white rounded-md hover:bg-[#089B45] transition-all">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
