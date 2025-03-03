"use client";

import { motion } from "framer-motion";

const quotes = [
  "“Energy and persistence conquer all things.” – Benjamin Franklin",
  "“The best way to predict the future is to create it.” – Peter Drucker",
  "“Risk is like fire: If controlled, it will help you; if uncontrolled, it will rise up and destroy you.” – Theodore Roosevelt",
  "“The greatest danger in times of turbulence is not the turbulence—it is to act with yesterday’s logic.” – Peter Drucker",
  "“Electricity is the power that causes all natural phenomena not known to be caused by something else.” – Ambrose Bierce",
  "“Finance is not merely about making money. It is about achieving our deep goals and protecting the fruits of our labor.” – Robert J. Shiller",
  "“The stone age didn’t end for lack of stone, and the oil age will end long before the world runs out of oil.” – Sheikh Yamani",
  "“A transition to clean energy is about making an investment in our future.” – Gloria Reuben",
  "“An investment in knowledge pays the best interest.” – Benjamin Franklin",
  "“We cannot solve our problems with the same thinking we used when we created them.” – Albert Einstein",
];

const QuotesSection = () => {
  return (
    <section className="bg-white py-10 overflow-hidden border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Words of Wisdom
          </motion.h2>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-16 whitespace-nowrap text-lg font-medium text-[#0ABF53] italic"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {quotes.concat(quotes).map((quote, index) => (
              <motion.span
                key={index}
                className="opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {quote} •
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
