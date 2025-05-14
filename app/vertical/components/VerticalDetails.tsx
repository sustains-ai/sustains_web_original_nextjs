import { motion } from "framer-motion";

type VerticalDetailsType = {
    title: string
    subTitle: string
    description: string
    data: { name: string, desc: string }[]
}
export default function VerticalDetails({
    title,
    subTitle,
    description,
    data
}: VerticalDetailsType) {

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: i * 0.1 },
        }),
    };

    return (
        <div>
            <motion.h1
                className="text-4xl md:text-6xl font-extrabold text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53] drop-shadow-lg mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {title}
                <motion.span
                    className="block w-32 h-1 bg-gradient-to-r from-[#089B45] to-[#0ABF53] rounded-full mx-auto mt-2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
            </motion.h1>

            <motion.div
                className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(10, 191, 83, 0.2)" }}
            >
                <p className="text-gray-700 mb-6">{description}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{subTitle}</h3>
                <ul className="list-none pl-0 text-gray-700">
                    {data.map((item, i) => (
                        <motion.li
                            key={i}
                            className="flex items-start gap-3 py-2"
                            custom={i}
                            variants={listItemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <span className="text-[#0ABF53] font-bold text-xl">→</span>
                            <div>
                                <strong>{item.name}</strong>: {item.desc}
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}