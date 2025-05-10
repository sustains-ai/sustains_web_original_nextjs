"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Team Data
const teamSection = [
  {
    name: "Aswin",
    role: "CEO",
    image: "/img/350x350/aswin2.png",
    bio: "Our Chief Entertaining Officer. He talks—a lot. Conversations range from product strategies to deep spiritual insights, though there is ongoing debate about how spiritual he truly is. A relentless extrovert, he thrives on social interactions and energizes every discussion he joins."  },
  {
    name: "Sachin Muralee Krishna",
    role: "Head of Strategy",
    image: "/img/350x350/sachin3.png",
    bio: "Our budding CFO. Loves finance and hangovers in equal measure. Equally passionate about spreadsheets and sweets. Rarely speaks—unless fueled by a drink. Eligible bachelor, for now."
  },
  {
    name: "Arjun C Unni",
    role: "Head of products",
    image: "/img/350x350/arjun2.jpg",
    bio: "Started in product, detoured through a PhD in Energy, dabbled in finance, fell for code, and somehow ended up as CTO. Basically, he collects careers like other people collect coffee mugs. In the kitchen, he's a culinary anarchist — no recipes, just chaos and delicious outcomes. Think MasterChef meets mad scientist. He debates like it's a sport, switches sides mid-argument for fun, and feels absolutely nothing while doing it. Cold-blooded, but charming"
  },
  // {
  //   name: "Ravi",
  //   role: "Head of Business Development",
  //   image: "/img/350x350/Ravi_g.png",
  //   bio: "Energy whisperer with 15+ years of sparking business deals. Official sponsor of our tea, coffee, and beer runs. Resident people-magnet — and also the one asking ‘wait… does this even make sense?’ at every step. Keeps us grounded while secretly hoping we make it to unicorn land."
  // },
  {
    name: "Harsha M",
    role: "Head of Engineering",
    image: "/img/350x350/Harsha_g.png",
    bio:"Works in stealth mode — we never know when, but he always delivers. Attends meetings from tea stalls, gyms, and temples. A true React enthusiast and the quiet force behind everything you see on this website. Talks only when necessary, codes like it is second nature. The geek of our team."
  },
  {
    name: "Chinju",
    role: "Head of UX/UI",
    image: "/img/350x350/Chinju_g.png",
    bio: "Holds a PhD in user research and a black belt in observing our every move. She is our go-to person for “Are we doing this right?” and “Do clients even like this?” Says ‘thank you’ and ‘sorry’ more times than we can count — usually while quietly taking notes on our behavior. Keeps us grounded in reality and user love. Absolute food person… but tragically, a vegetarian."
  },
  {
    name: "Rohit",
    role: "Head of Consulting",
    image: "/img/350x350/Rohit_g.png",
    bio: "Our consulting head with Big4 battle scars and a calendar full of meetings we never asked him to attend — at hours we would not dare suggest. Can never say no (we have tried). A brilliant chef in his downtime, known for both killer biriyani and uncompromising work ethic. Whether it is strategy decks or dinner plates, there is only one rule: no shortcuts, no compromise."
  },
  {
    name: "Reshma",
    role: "Head of Energy",
    image: "/img/350x350/Reshma_g.png",
    bio:"Our head of energy — and yes, she breathes Python. Equally fluent in code and client conversations, she is the rare mix of engineer and consultant. With her at the helm, the energy vertical is not just safe — it is thriving. Calm, precise, and always one script away from solving the impossible."
  },
];

const TeamSection = () => {
  const [index, setIndex] = useState(0);

  // Handle Next
  const nextMember = () => {
    setIndex((prevIndex) => (prevIndex + 1) % teamSection.length);
  };

  // Handle Previous
  const prevMember = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? teamSection.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white py-5">
      <div className="container mx-auto text-center px-0 relative">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Core Team
        </motion.h2>

        {/* Carousel Wrapper */}
        <div className="relative w-full max-w-md mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={teamSection[index].name}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-xl text-center border-t-4 border-[#0ABF53]"
            >
              {/* Team Image */}
              <div className="w-48 h-48 mx-auto overflow-hidden rounded-full shadow-md">
                <Image
                  src={teamSection[index].image}
                  alt={teamSection[index].name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Team Info */}
              <h5 className="text-2xl font-semibold text-gray-900 mt-4">
                {teamSection[index].name}
              </h5>
              <span className="text-gray-600">{teamSection[index].role}</span>
              <p className="text-gray-700 mt-3 text-sm">
                {teamSection[index].bio}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevMember}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition"
          >
            ◀
          </button>
          <button
            onClick={nextMember}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
