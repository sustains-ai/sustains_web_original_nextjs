"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "Working with Sustains.ai for market risk consultancy has been a transformative experience. Their expert insights and innovative solutions have significantly enhanced our risk management strategies.",
    name: "Sooraj E",
    role: "Co-founder & CTO | Marketfeed",
    img: "/img/160x160/Sooraj.jpg",
  },
  {
    text: "Sustains.ai’s AI-driven analytics provided us with unparalleled clarity in energy risk assessment. Their models gave us the confidence to make strategic energy investments with precision.",
    name: "Priya R",
    role: "Energy Consultant",
    img: "/img/160x160/img9.jpg",
  },
  {
    text: "The risk analytics platform by Sustains.ai helped us refine our equity research models. The platform’s automation features have saved us hours of manual effort.",
    name: "Julia Clinton",
    role: "Investment Analyst",
    img: "/img/160x160/img10.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F8F9FA] text-gray-900 py-16">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonials Container - Cards Side by Side */}
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
            <motion.div
                key={index}
                className="relative p-8 rounded-lg shadow-lg max-w-xs text-center transition-all duration-500 bg-gradient-to-br from-[#A8E6CF] to-[#0ABF53] text-white"
                whileHover={{scale: 1.05, rotate: 2}}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.2}}
            >
                {/* Floating Glow Effect */}
                <motion.div
                    className="absolute inset-0 opacity-20 bg-white blur-xl rounded-lg"
                    animate={{opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1]}}
                    transition={{repeat: Infinity, duration: 3}}
                />

                <div className="w-[80px] h-[80px] overflow-hidden rounded-full mx-auto border-4 border-white shadow-md">
                    <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover"
                    />
                </div>
                <p className="text-lg italic">&quot;{testimonial.text}&quot;</p>
                <h5 className="mt-4 font-semibold">{testimonial.name}</h5>
                <span className="text-sm text-white/80">{testimonial.role}</span>
            </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
