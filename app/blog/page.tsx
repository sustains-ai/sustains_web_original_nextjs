import React from "react";
import BlogData from "../common/components/Blog/blogData";
import BlogItem from "../common/components/Blog/BlogItem";
import SectionHeader from "../common/components/SectionHeader";

const Blog = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
           <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Stay updated with the newest trends, insights, and innovations. Explore in-depth articles, industry news, and expert opinions, keeping you informed and inspired. Whether it’s technology breakthroughs, creative ideas, or success stories — discover what’s happening now!`,
            }}
          /> 
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
