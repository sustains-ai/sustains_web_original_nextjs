import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ContactUS({ title }: { title: string }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(10, 191, 83, 0.2)" }}
        >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-700 mb-4">
                Contact us for daily portfolio reports, risk analysis, and compliance solutions tailored to your needs—whether you’re a fund manager, investor, or institution.
            </p>
            <p className="text-lg font-semibold text-[#0ABF53] mb-6">We are your personal quant.</p>
            <Link href="/contact">
                <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#089B45] to-[#0ABF53] text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get in Touch
                    <ChevronRight className="w-5 h-5" />
                </motion.button>
            </Link>
        </motion.div>
    )
}