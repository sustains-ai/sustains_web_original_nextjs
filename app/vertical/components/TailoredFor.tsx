import { motion } from "framer-motion";

export default function TailoredFor({ title, description }: { title: string, description: string }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(10, 191, 83, 0.2)" }}
        >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </motion.div>
    )
}