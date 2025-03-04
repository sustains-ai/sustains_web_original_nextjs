import BlogData from "@/app/common/components/Blog/blogData";
import RelatedPost from "../../common/components/Blog/RelatedPost";
import Image from "next/image";
import { Blog } from "@/types/blog";

const SingleBlogPage = async ({ params }: { params: Promise<{ title: string }> }) => {
    const resolvedParams = await params;
    const link = resolvedParams.title;
    const blog = BlogData.find((b: Blog) => b.link === link);

    if (!blog) {
        return null;
    }

    const imageSrc = typeof blog.image === "string" ? blog.image : blog.image?.src || "/default-image.jpg";
    const dateString = blog.date instanceof Date ? blog.date.toISOString().split("T")[0] : blog.date;

    return (
        <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-12">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
                    <div className="md:w-1/2 lg:w-[32%]">
                        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13">
                            <form action="https://formbold.com/s/unique_form_id" method="POST">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search Here..."
                                        className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none"
                                    />
                                    <button className="absolute right-0 top-0 p-5" aria-label="search-icon">
                                        <svg
                                            className="fill-black transition-all duration-300 hover:fill-primary"
                                            width="21"
                                            height="21"
                                            viewBox="0 0 21 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-5 shadow-solid-13">
                            <h4 className="mb-7.5 text-2xl font-semibold text-black">
                                Categories
                            </h4>
                            <ul>
                                <li className="mb-3 font-semibold transition-all duration-300 last:mb-0 hover:text-primary">
                                    <a className="text-grey" href="#">Blog</a>
                                </li>
                                <li className="mb-3 font-semibold transition-all duration-300 last:mb-0 hover:text-primary">
                                    <a className="text-grey" href="#">Events</a>
                                </li>
                                <li className="mb-3 font-semibold transition-all duration-300 last:mb-0 hover:text-primary">
                                    <a className="text-grey" href="#">Grids</a>
                                </li>
                                <li className="mb-3 font-semibold transition-all duration-300 last:mb-0 hover:text-primary">
                                    <a className="text-grey" href="#">News</a>
                                </li>
                                <li className="mb-3 font-semibold transition-all duration-300 last:mb-0 hover:text-primary">
                                    <a className="text-grey" href="#">Rounded</a>
                                </li>
                            </ul>
                        </div>

                        <RelatedPost />
                    </div>

                    <div className="lg:w-2/3">
                        <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 md:p-10">
                            <div className="mb-10 w-full overflow-hidden">
                                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                    <Image
                                        src={imageSrc}
                                        alt={blog.title || "Blog image"}
                                        fill
                                        className="rounded-md object-cover object-center"
                                    />
                                </div>
                            </div>

                            <h2 className="mb-5 mt-11 text-3xl font-semibold text-black 2xl:text-sectiontitle2">
                                {blog.title}
                            </h2>

                            <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                                <li>
                                    <span className="text-black">Author: </span> {blog.author?.name || "Unknown"}
                                </li>
                                <li>
                                    <span className="text-black">Published On: </span> {dateString}
                                </li>
                                <li>
                                    <span className="text-black">Category: </span> Events
                                </li>
                            </ul>

                            <div className="blog-details">
                                {blog.content.map((block, index) => {
                                    switch (block.type) {
                                        case "paragraph":
                                            return <p key={index} className="mb-4">{block.text}</p>;
                                        case "heading":
                                            return block.level === 2 ? (
                                                <h2 key={index} className="mb-2 text-2xl font-semibold">{block.text}</h2>
                                            ) : (
                                                <h3 key={index} className="mb-2 text-xl font-semibold">{block.text}</h3>
                                            );
                                        case "list":
                                            return block.ordered ? (
                                                <ol key={index} className="list-decimal pl-5 mb-4">
                                                    {block.items?.map((item, i) => (
                                                        <li key={i}>{item.replace(/^\d+\.\s*/, "")}</li>
                                                    ))}
                                                </ol>
                                            ) : (
                                                <ul key={index} className="list-disc pl-5 mb-4">
                                                    {block.items?.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleBlogPage;