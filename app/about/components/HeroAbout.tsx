"use client";

import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <section className="bg-white text-black py-24 pt-[160px] relative overflow-hidden">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side - Content & Code */}
        <div className="flex flex-col space-y-8 md:ml-[-60px]">
          {/* Text Content */}
          <motion.div>
            <motion.h1
              className="text-5xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Making Sense of Data,
            </motion.h1>
            <motion.h2
              className="text-5xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-[#0ABF53]"> Redefining Portfolios.</span>
            </motion.h2>

            <motion.p
              className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We analyze complex financial and energy portfolios, transforming raw data into
              actionable insights that drive smarter decisions. Whether optimizing risk or
              maximizing sustainability, our approach is built for the future.
            </motion.p>

            <motion.p
              className="mt-4 text-lg text-gray-700 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Beyond the algorithms, we are still those college dreamers, fueled by curiosity,
              late-night discussions, and a drive to solve real-world problems. What started
              as a passion for data and strategy is now a mission to help businesses
              navigate uncertainty and build resilient portfolios.
            </motion.p>
          </motion.div>

          {/* Code Snippet Styled as a Terminal */}
          <motion.div
            className="relative bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg w-full sm:w-[550px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Fake Terminal UI Buttons */}
            <div className="absolute top-2 left-4 flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            {/* Python Code Snippet */}
            <pre className="text-sm md:text-base overflow-x-auto mt-6 whitespace-pre-wrap">
              <code>
                {`def optimize_portfolio(data):
    optimized_assets = []
    for asset in data:
        risk = analyze_risk(asset)
        allocation = adjust_weights(asset, risk)
        optimized_assets.append({
            'asset': asset,
            'allocation': allocation
        })
    return optimized_assets
`}
              </code>
            </pre>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          className="relative flex justify-center md:mr-[-60px] mt -top -top-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.img
            className="rounded-lg shadow-xl w-[550px] h-auto"
            src="/img/950x950/HeroAbout_1.jpg"
            alt="Our Team"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>

      {/* Decorative SVG - Positioned Bottom Right */}
      <motion.div
        className="absolute bottom-[10px] right-[30px] opacity-30 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <img
          src="/svg/illustrations/star-half.svg"
          alt="Decorative SVG"
          width={120}
          height={120}
        />
      </motion.div>
    </section>
  );
};

export default HeroAbout;
