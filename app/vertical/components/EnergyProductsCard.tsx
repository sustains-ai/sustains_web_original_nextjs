"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
    id: string;
    title: string;
    description: string;
    img: string;
    link: string;
}

export default function EnergyProductsCard({ product }: { product: Product }) {
    const router = useRouter();

    return (
        <motion.div
            className="rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
        >
            {/* Product Image */}
            <div className="relative w-full h-48">
                <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover rounded-t-xl"
                />
            </div>

            {/* Product Content */}
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Button */}
                <button
                    onClick={() => router.push(product.link)}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                    Learn More →
                </button>
            </div>
        </motion.div>
    );
}
