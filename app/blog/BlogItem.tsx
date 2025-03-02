"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: any }) => {
  const { image, title, description, link } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#0ABF53] hover:scale-105 transition-transform"
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={image} alt={title} fill />
        </Link>

        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            <Link href={`/blog/${link}`}>
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="text-gray-700 mt-3">{description}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
