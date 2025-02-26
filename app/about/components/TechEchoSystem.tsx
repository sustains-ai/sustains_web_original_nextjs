"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Tech Stack Categories
const techStack = [
  { name: "Flask", image: "/svg/brands/flask-wordmark-light.svg" },
  { name: "Django", image: "/svg/brands/django.svg" },
  { name: "FastAPI", image: "/svg/brands/fastapi.svg" },
  { name: "Python", image: "/svg/brands/python.svg" },
  { name: "MongoDB", image: "/svg/brands/mongodb.svg" },
  { name: "PostgreSQL", image: "/svg/brands/postgresql.svg" },
  { name: "Docker", image: "/svg/brands/github.svg" },
  { name: "Kubernetes", image: "/svg/brands/kubernetes.svg" },
  { name: "AWS", image: "/svg/brands/aws.svg" },
];

// AI & Monitoring Tools
const aiTools = [
  { name: "TensorFlow", image: "/svg/brands/tensorflow.svg" },
  { name: "PyTorch", image: "/svg/brands/github.svg" },
  { name: "Grafana", image: "/svg/brands/postgresql.svg" },
];

// Integration Tools
const integrations = [
  { name: "Slack", image: "/svg/brands/python.svg" },
  { name: "Jira", image: "/svg/brands/matlab.svg" },
  { name: "Dropbox", image: "/svg/brands/julia.svg" },
  { name: "Google APIs", image: "/svg/brands/kubernetes.svg" },
];

const TechEcosystem = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Technology Ecosystem
        </motion.h2>

        <motion.p
          className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          At Sustains.ai, our technology ecosystem reflects our commitment to
          innovation, scalability, and seamless collaboration. These tools form
          the backbone of our solutions, enabling us to deliver advanced risk
          analytics and resource optimization.
        </motion.p>

        {/* Tech Stack Section */}
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={tech.image} alt={tech.name} width={50} height={50} />
              <p className="text-gray-700 mt-2">{tech.name}</p>
            </motion.div>
          ))}
        </div>

        {/* AI Tools Section */}
        <h3 className="text-2xl font-semibold text-center text-gray-800 mt-12 mb-6">
          AI & Monitoring Tools
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {aiTools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={tool.image} alt={tool.name} width={50} height={50} />
              <p className="text-gray-700 mt-2">{tool.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Integrations Section */}
        <h3 className="text-2xl font-semibold text-center text-gray-800 mt-12 mb-6">
          Integrations
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={integration.image}
                alt={integration.name}
                width={50}
                height={50}
              />
              <p className="text-gray-700 mt-2">{integration.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechEcosystem;
