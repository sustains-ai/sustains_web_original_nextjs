"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA = () => {
    return (
        <>
            {/* <!-- ===== Index Start ===== --> */}
            <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-24 xl:py-28 2xl:px-0">
                <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#1D976C] to-[#93F9B9] px-7.5 py-12.5 md:px-12.5 xl:px-17.5 xl:py-0">
                    <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="animate_left md:w-[70%] lg:w-1/2"
                        >
                            <h2 className="mb-4 w-11/12 text-3xl font-bold text-black xl:text-sectiontitle4">
                                AI-Driven Consulting Excellence
                            </h2>
                            <p>
                                From optimizing energy resource planning to financial risk
                                analysis, we harness the power of AI and quantitative modeling
                                to drive sustainable growth and smarter decision-making.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 20 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="animate_right lg:w-[45%]"
                        >
                            <div className="flex items-center justify-end xl:justify-between">
                                <Image
                                    width={299}
                                    height={299}
                                    src="/images/shape-06.png"
                                    alt="Saly"
                                    className="hidden xl:block"
                                />
                                {/* FIXED: Wrap both the text and the image inside the <Link> component */}
                                <Link
                                    href="/consulting"
                                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90"
                                >
                                    Explore Our Consulting Projects
                                    <Image
                                        width={20}
                                        height={20}
                                        src="/images/icon-arrow.svg"
                                        alt="Arrow"
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* <!-- ===== Index End ===== --> */}
        </>
    );
};

export default CTA;
