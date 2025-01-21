import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { FaPenNib } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const blogs = [
  {
    id: 1,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    href: "/blogs",
    pic: "/images/products/blog-image-1.png",
  },
  {
    id: 2,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    href: "/blogs",
    pic: "/images/products/blog-image-2.png",
  },
  {
    id: 3,
    title: "Sit nam congue feugiat nisl, mauris amet nisi. ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    href: "/blogs",
    pic: "/images/products/blog-image-3.png",
  },
];

export default function Blog() {
  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto px-4 mt-28">
          <div className="grid lg:grid-cols-[70%_30%] md:grid-cols-[70%_30%] grid-cols-1 gap-6">
            <div className="col-span-1 ">
              {blogs.map((blog) => {
                return (
                  <div key={blog.id}>
                    <div className="w-full">
                      <Image
                        src={blog.pic}
                        width={1000}
                        height={1000}
                        alt="img.png"
                        className="object-contain w-full"
                      ></Image>
                    </div>
                    <div className="flex gap-4 text-[#151875] lg:mt-8 md:mt-6 mt-3 lg:justify-start md:justify-start justify-center">
                      <div className="flex gap-2 items-center">
                        <div className="text-[#FB2E86]">
                          <FaPenNib className="h-4 w-4" />
                        </div>
                        <p className=" bg-[#FFE7F9] text-[#151875] font-josefin font-medium lg:px-10  md:px-6 px-2 rounded-sm">
                          {blog.author}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="text-[#FFA454]">
                          <LuCalendarDays className="h-4 w-4" />
                        </div>
                        <p className=" bg-[#FFECE2] text-[#151875] font-medium font-lato lg:px-10 md:px-4 px-2 rounded-sm">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-xl text-[#151875] font-bold font-josefin my-5">
                      {blog.title}
                    </p>
                    <p className="text-[#8A8FB9] text-sm font-lato lg:text-start md:text-start text-justify">
                      {blog.desc}
                    </p>
                    <div className="flex gap-1 items-center font-lato lg:my-5 md:my-4 mt-2 mb-5 lg:justify-start md:justify-start justify-center">
                      <Link href={`${blog.href}`}>
                        <p className="text-[#151875] font-bold text-lg">
                          Read More
                        </p>
                      </Link>
                      <div className="h-1 w-1 rounded-full bg-[#FB2E86]"></div>
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-center items-center gap-5">
                <Link href={"#"}>
                  <div className="bg-[#FB2CA8] text-white h-6 w-8 text-center rounded-sm">
                    1
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="text-[#E0D3F5] h-6 w-8 text-center rounded-sm border border-[#E0D3F5]">
                    2
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="text-[#E0D3F5] h-6 w-8 text-center rounded-sm border border-[#E0D3F5]">
                    3
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="text-[#E0D3F5] h-6 w-8 text-center rounded-sm border border-[#E0D3F5]">
                    4
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-span-1 w-3/4">
              <div>
                <p className="font-bold text-[#151875] font-josefin text-lg flex lg:justify-start md:justify-start justify-center mt-8 lg:mt-0 md:mt-0">
                  Search
                </p>
                <div className="lg:flex justify-between border border-[#BDBDD8] rounded-sm mt-3 flex ">
                    <input
                      type="text"
                      className="px-2 py-3 outline-none placeholder:text-gray-200 border-[#BDBDD8]"
                      placeholder="Search for Posts"
                    />
                  <button className=" px-4 py-1">
                    <CiSearch className=" h-6 w-6 text-[#CBCBE0]" />
                  </button>
                </div>
              </div>
              <div className="mt-10 w-full font-josefin">
                <h1 className="font-bold text-[#151875] text-lg mb-4 flex lg:justify-start md:justify-start justify-center">
                  Categories
                </h1>
                <div className="flex lg:justify-between justify-center md:justify-between gap-8 mb-2 ">
                  <button className="bg-[#F939BF] w-40 py-2 pl-2 rounded-md text-white font-normal text-start">
                    Hobbies (14)
                  </button>
                  <button className=" w-40 py-2  pl-2 rounded-sm text-[#151875] font-normal text-start">
                    Women (21)
                  </button>
                </div>
                <div className="flex lg:justify-between justify-center md:justify-between gap-8 mb-2">
                  <button className=" w-40 py-2  pl-2 rounded-sm text-[#151875] font-normal text-start">
                    Women (21)
                  </button>
                  <button className=" w-40 py-2  pl-2 rounded-sm text-[#151875] font-normal text-start">
                    Women (21)
                  </button>
                </div>
                <div className="flex lg:justify-between justify-center md:justify-between gap-8 mb-2">
                  <button className=" w-40 py-2  pl-2 rounded-sm text-[#151875] font-normal text-start">
                    Women (21)
                  </button>
                  <button className=" w-40 py-2  pl-2 rounded-sm text-[#151875] font-normal text-start">
                    Women (21)
                  </button>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="font-bold text-[#151875] font-josefin text-lg mb-4 flex justify-center lg:justify-start md:justify-start">
                  Recent Post
                </h1>
                <div className="flex justify-center lg:justify-start md:justify-start">
                  <ul>
                    <li>
                      <div className="flex gap-2 mb-6">
                        <div className="">
                          <Image
                            src="/images/products/blog-image-4.png"
                            alt="Image.png"
                            width={1000}
                            height={1000}
                            className="object-contain w-24 h-16"
                          ></Image>
                        </div>
                        <div>
                          <p className="font-bold font-josefin text-[#151875]">
                            It is a long established fact
                          </p>
                          <p className="text-[#151875] font-lato">Aug 09 2020</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 mb-6">
                        <div className="">
                          <Image
                            src="/images/products/blog-image-5.png"
                            alt="Image.png"
                            width={1000}
                            height={1000}
                            className="object-contain w-24 h-16"
                          ></Image>
                        </div>
                        <div>
                          <p className="font-bold font-josefin text-[#151875]">
                            It is a long established fact
                          </p>
                          <p className="text-[#151875] font-lato">Aug 09 2020</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 mb-6">
                        <div className="">
                          <Image
                            src="/images/products/blog-image-6.png"
                            alt="Image.png"
                            width={1000}
                            height={1000}
                            className="object-contain w-24 h-16"
                          ></Image>
                        </div>
                        <div>
                          <p className="font-bold font-josefin text-[#151875]">
                            It is a long established fact
                          </p>
                          <p className="text-[#151875] font-lato">Aug 09 2020</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 mb-6">
                        <div className="">
                          <Image
                            src="/images/products/blog-image-7.png"
                            alt="Image.png"
                            width={1000}
                            height={1000}
                            className="object-contain w-24 h-16"
                          ></Image>
                        </div>
                        <div>
                          <p className="font-bold font-josefin text-[#151875]">
                            It is a long established fact
                          </p>
                          <p className="text-[#151875] font-lato">Aug 09 2020</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="font-bold font-josefin text-[#151875] text-lg mb-4 flex justify-center lg:justify-start">
                  Sale Product
                </h1>
                <div className="flex lg:justify-start md:justify-start justify-center">
                  <ul>
                    <li>
                      <div className="flex gap-2 mb-6">
                        <div className="">
                          <Image
                            src="/images/products/blog-image-8.png"
                            alt="Image.png"
                            width={1000}
                            height={1000}
                            className="object-contain w-24 h-16"
                          ></Image>
                        </div>
                        <div>
                          <p className="font-bold font-josefin text-[#151875]">
                            Elit ornare in enim mauris.
                          </p>
                          <p className="text-[#151875] font-lato">Aug 09 2020</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 mb-6">
                        <div className="">
                          <Image
                            src="/images/products/blog-image-9.png"
                            alt="Image.png"
                            width={1000}
                            height={1000}
                            className="object-contain w-24 h-16"
                          ></Image>
                        </div>
                        <div>
                          <p className="font-bold font-josefin text-[#151875]">
                            Viverra pulvinar et enim.
                          </p>
                          <p className="text-[#151875] font-lato">Aug 09 2020</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 mb-6">
                        <div className="">
                          <Image
                            src="/images/products/blog-image-10.png"
                            alt="Image.png"
                            width={1000}
                            height={1000}
                            className="object-contain w-24 h-16"
                          ></Image>
                        </div>
                        <div>
                          <p className="font-bold font-josefin text-[#151875]">
                            Mattis varius donec fdsfd
                          </p>
                          <p className="text-[#151875] font-lato">Aug 09 2020</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="font-bold font-josefin text-[#151875] text-lg mb-4 flex lg:justify-start md:justify-start justify-center">
                  Offer Product
                </h1>
                <div className="flex gap-4 mb-6 lg:justify-start md:justify-start justify-center">
                  <div>
                    <div>
                      <Image
                        src="/images/products/blog-image-11.png"
                        alt="Image.png"
                        width={1000}
                        height={1000}
                        className="object-contain w-32 h-20"
                      ></Image>
                    </div>
                    <div className="text-center w-32 text-[#151875] font-lato text-sm">
                      <p className="font-bold">Duis lectus est.</p>
                      <p className="text-[#8A8FB9]">$12.00 - $15.00</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Image
                        src="/images/products/blog-image-12.png"
                        width={1000}
                        height={1000}
                        alt="Image.png"
                        className="object-contain w-32 h-20"
                      ></Image>
                    </div>
                    <div className="text-center w-32 text-[#151875] font-lato text-sm">
                      <p className="font-bold">Sed placerat.</p>
                      <p className="text-[#8A8FB9]">$12.00 - $15.00</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mb-6 lg:justify-start md:justify-start justify-center">
                  <div>
                    <div>
                      <Image
                        src="/images/products/blog-image-13.png"
                        width={1000}
                        height={1000}
                        alt="Image.png"
                        className="object-contain w-32 h-20"
                      ></Image>
                    </div>
                    <div className="text-center w-32 text-[#151875] font-lato text-sm">
                      <p className="font-bold">Netus proin.</p>
                      <p className="text-[#8A8FB9]">$12.00 - $15.00</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Image
                        src="/images/products/blog-image-14.png"
                        width={1000}
                        height={1000}
                        alt="Image.png"
                        className="object-contain w-32 h-20"
                      ></Image>
                    </div>
                    <div className="text-center w-32 text-[#151875] font-lato text-sm">
                      <p className="font-bold">Platea in.</p>
                      <p className="text-[#8A8FB9]">$12.00 - $15.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="font-bold font-josefin text-[#151875] text-lg mb-6 text-center lg:text-start md:text-start">
                  Follow
                </h1>
                <div className="flex gap-4 lg:justify-start md:justify-start justify-center">
                  <div>
                    <Link href="https://www.facebook.com/profile.php?id=100089787627729">
                      <div className="bg-[#5625DF] p-1 rounded-full">
                        <BiLogoFacebook className="h-6 w-6 text-white" />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.instagram.com/mhamza7718">
                      <div className="bg-[#FF27B7] p-2 rounded-full">
                        <PiInstagramLogoFill className="h-5 w-5 text-white" />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <div className="bg-[#37DAF3] p-2 rounded-full">
                      <FaTwitter className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 text-center lg:text-start md:text-start">
                <h1 className="font-bold font-josefin text-[#151875] text-lg mb-6">Tags</h1>
                <div>
                  <ul className="lg:flex gap-6">
                    <li className="hover:underline hover:underline-offset-4 text-[#151875] text-lg  hover:text-[#FB2E86] hover:cursor-pointer my-2 lg:my-0 md:my-0">
                      General
                    </li>
                    <li className="hover:underline hover:underline-offset-4 text-[#151875] text-lg  hover:text-[#FB2E86] hover:cursor-pointer my-2 lg:my-0 md:my-0">
                      Atsanil
                    </li>
                    <li className="hover:underline hover:underline-offset-4 text-[#151875] text-lg  hover:text-[#FB2E86] hover:cursor-pointer my-2 lg:my-0 md:my-0">
                      Insas.
                    </li>
                    <li className="hover:underline hover:underline-offset-4 text-[#151875] text-lg  hover:text-[#FB2E86] hover:cursor-pointer my-2 lg:my-0 md:my-0">
                      Bibsaas
                    </li>
                    <li className="hover:underline hover:underline-offset-4 text-[#151875] text-lg  hover:text-[#FB2E86] hover:cursor-pointer my-2 lg:my-0 md:my-0">
                      Nulla.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
