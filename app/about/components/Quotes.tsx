"use client";

import { motion } from "framer-motion";

const quotes = [
  "“Risk comes from not knowing what you're doing.” – Warren Buffett",
  "“Opportunities come infrequently. When it rains gold, put out the bucket.” – Warren Buffett",
  "“The stock market is filled with individuals who know the price of everything, but the value of nothing.” – Philip Fisher",
  "“Price is what you pay. Value is what you get.” – Warren Buffett",
  "“Wide diversification is only required when investors do not understand what they are doing.” – Charlie Munger",
  "“Risk means more things can happen than will happen.” – Elroy Dimson",
  "“Investing should be more like watching paint dry or watching grass grow.” – Paul Samuelson",
  "“Time in the market beats timing the market.” – Ken Fisher",
  "“The four most dangerous words in investing are: ‘This time it’s different.’” – John Templeton",
  "“Know what you own, and know why you own it.” – Peter Lynch",
];

const QuotesSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#D4E09B] to-[#A44A3F] py-10 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="flex space-x-16 whitespace-nowrap text-xl font-semibold text-gray-900 italic"
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
    </section>
  );
};

export default QuotesSection;
