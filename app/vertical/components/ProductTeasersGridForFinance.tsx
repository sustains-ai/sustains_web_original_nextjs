"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Product {
    id: string;
    title: string;
    description: string;
    img: string;
    color: string;
    border: string;
    status: string;
}

interface Props {
    products: Product[];
}

export default function ProductTeasersGridForFinance({ products }: Props) {
    const router = useRouter();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    className={`rounded-xl shadow-lg overflow-hidden ${product.color} ${product.border} border-2 transition-all duration-300 ${
                        product.status === "offering" ? "hover:shadow-xl" : "opacity-75 cursor-not-allowed"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={product.status === "offering" ? { scale: 1.05 } : {}}
                >
                    {/* Teaser Image */}
                    <div className="relative h-48 w-full">
                        <Image
                            src={product.img}
                            alt={product.title}
                            fill
                            className="object-cover rounded-t-xl"
                        />
                        <div className="absolute inset-0 bg-black opacity-10 rounded-t-xl" />
                    </div>

                    {/* Teaser Content */}
                    <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                        <span
                            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                                product.status === "offering" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"
                            }`}
                        >
                            {product.status === "offering" ? "Available Now" : "In Pipeline"}
                        </span>

                        {/* Button for Risk Analytics Card */}
                        {product.title === "Risk Analytics" && (
                            <div className="mt-4">
                                <button
                                    onClick={() => router.push("/vertical/risk/know-more/portfolio-analysis")}
                                    className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                                >
                                    Go to Portfolio Analysis →
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Decorative Accent */}
                    {product.status === "offering" && (
                        <div className={`absolute top-0 left-0 w-2 h-full ${product.border.replace("border-", "bg-")}`} />
                    )}
                </motion.div>
            ))}
        </div>
    );
}
