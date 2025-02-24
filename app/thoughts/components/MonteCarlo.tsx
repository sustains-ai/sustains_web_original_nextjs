"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

const MonteCarlo = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const width = 600, height = 400;
    const margin = { top: 30, right: 30, bottom: 40, left: 50 };

    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const mu = 0, sigma = 1;
    const x = d3.scaleLinear().domain([mu - 4 * sigma, mu + 4 * sigma]).range([0, width - margin.left - margin.right]);
    const y = d3.scaleLinear().domain([0, 0.4]).range([height - margin.top - margin.bottom, 0]);

    const data = d3.range(mu - 4 * sigma, mu + 4 * sigma, 0.01).map(x => ({ x, y: (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mu) / sigma) ** 2) }));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", d3.line<{ x: number; y: number }>()
          .x(d => x(d.x))
          .y(d => y(d.y))
      );


    svg.append("path")
      .datum(data.filter(d => d.x < -1.65))
      .attr("fill", "red")
      .attr("opacity", 0.5)
      .attr("d", d3.area<{ x: number; y: number }>()
            .x(d => x(d.x))
            .y0(() => y(0))
             .y1(d => y(d.y))
      );


    svg.append("text")
      .attr("x", x(-1.65))
      .attr("y", y(0.05))
      .attr("fill", "black")
      .attr("text-anchor", "middle")
      .text("5% VaR (Risk)");

    svg.append("g").attr("transform", `translate(0, ${height - margin.top - margin.bottom})`).call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));
  }, []);

  return (
    <section className="bg-gray-100 text-gray-900 py-24">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Monte Carlo Risk Simulation
        </motion.h2>
        <div ref={chartRef} className="flex justify-center" />
      </motion.div>
    </section>
  );
};

export default MonteCarlo;
