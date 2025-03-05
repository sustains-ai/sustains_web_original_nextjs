"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Type Definition for Products
type Product = {
    id: string;
    title: string;
    description: string;
    img: string;
    status: "offering" | "pipeline";
    color: string;
    border: string;
};

export default function ProductList({ products }: { products: Product[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    className={`relative p-6 rounded-lg ${product.color} ${product.border} border-2 shadow-lg overflow-hidden transition-all duration-500 ${
                        product.status === "offering" ? "hover:shadow-xl" : "opacity-70 cursor-not-allowed"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={product.status === "offering" ? { scale: 1.05 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <motion.div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 1 }}
                    />
                    <div className="relative z-10">
                        <h5 className="text-xl font-semibold text-gray-800">{product.title}</h5>
                        <p className="mt-2 text-sm text-gray-700">{product.description}</p>
                        {product.status === "offering" && (
                            <Link href="/contact">
                                <motion.button
                                    className="mt-4 px-4 py-2 bg-[#089B45] text-white rounded-full font-semibold text-sm hover:bg-[#0ABF53] transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
