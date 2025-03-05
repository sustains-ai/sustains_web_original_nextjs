import Image from "next/image";

export default function RiskKnowMore() {
    return (
        <section className="py-16 px-6 md:px-12">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-[#0ABF53] mb-6">
                    Learn More About Risk Analytics
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/images/risk_analysis_vertical.jpg"
                            alt="Risk Analysis"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side - Description */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our risk analytics platform provides deep insights into financial, operational, and energy-related
                            risks, ensuring resilience and long-term sustainability in a rapidly changing world.
                        </p>

                        <p className="mt-4 text-gray-600">
                            Using AI-driven models, we help businesses identify risk factors, develop mitigation strategies,
                            and optimize decision-making in uncertain environments.
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
