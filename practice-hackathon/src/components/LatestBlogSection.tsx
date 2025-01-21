import React from "react";
import Image from "next/image";
import { blogs } from "./data/sample_data";
import Link from "next/link";

export default function LatestBlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#151875] font-josefin text-3xl font-extrabold mb-10">
          Latest Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden group transition-all duration-300"
            >
              <div className="relative w-full h-96">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-contain rounded-lg"/>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-4 flex gap-2">
                    <Image
                      src="/images/products/Pen-logo.png"
                      alt="calendar"
                      width={20}
                      height={20}
                      className="h-4 w-4"
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                    {blog.author}
                  </span>
                  <span className="flex gap-2">
                    <Image
                      src="/images/products/Calendar-logo.png"
                      alt="calendar"
                      width={20}
                      height={20}
                      className="h-4 w-4"
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#151875] mb-4 group-hover:text-[#FB2E86] transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600">{blog.description}</p>
                <p className="text-gray-600 mb-4">{blog.description2}</p>
                <Link
                  href="/blogs"
                  className="text-[#151875] font-medium hover:underline hover:underline-offset-4 group-hover:text-[#FB2E86] transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
