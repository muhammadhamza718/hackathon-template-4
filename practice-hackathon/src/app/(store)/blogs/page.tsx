"use client";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaPenNib } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { logos } from "@/components/data/sample_data";
import { FaStar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FaComment } from "react-icons/fa6";

export default function Blogs() {
  const relProdBlog = [
    {
      id: "1",
      name: "Quam sed",
      Rating: (
        <div className="flex items-center lg:justify-start md:justify-start justify-center">
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-[#A3A2B6]">
            <FaStar />
          </div>
        </div>
      ),
      Price: "$32.00",
      oldPrice: "$56.00",
      pic: "/images/products/blog-image-17.png",
      href: "../products",
    },
    {
      id: "2",
      name: "Tristique sed",
      Rating: (
        <div className="flex items-center lg:justify-start md:justify-start justify-center">
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
        </div>
      ),
      Price: "$32.00",
      oldPrice: "$56.00",
      pic: "/images/products/blog-image-18.png",
      href: "../products",
    },
    {
      id: "3",
      name: "A etiam",
      Rating: (
        <div className="flex items-center lg:justify-start md:justify-start justify-center">
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-[#A3A2B6]">
            <FaStar />
          </div>
        </div>
      ),
      Price: "$32.00",
      oldPrice: "$56.00",
      pic: "/images/products/blog-image-19.png",
      href: "../products",
    },
    {
      id: "4",
      name: "Mi nisi",
      Rating: (
        <div className="flex items-center lg:justify-start md:justify-start justify-center">
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-yellow-400">
            <FaStar />
          </div>
          <div className="text-[#A3A2B6]">
            <FaStar />
          </div>
          <div className="text-[#A3A2B6]">
            <FaStar />
          </div>
        </div>
      ),
      Price: "$32.00",
      oldPrice: "$56.00",
      pic: "/images/products/blog-image-20.png",
      href: "../products",
    },
  ];
  const blogs = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, ",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      href: "/Blog/",
      pic: "/images/products/blog-image-1.png",
    },
  ];

  return (
    <>
      <div>
        <section className="w-full bg-[#F6F5FF]">
          <div className="max-w-7xl mx-auto py-24 px-6 ">
            <h1 className="text-4xl font-bold font-josefin mb-4 text-[#101750] josefin">
              Single Blog
            </h1>
            <nav className="text-black lato font-medium">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">.</span>
              <Link href="/" className="hover:underline">
                Pages
              </Link>
              <span className="mx-2 text-pink-500">.</span>
              <span className="text-pink-500">Single Blog</span>
            </nav>
          </div>
        </section>
        <div className=" max-w-7xl mx-auto px-4 mt-28">
          <div className="grid lg:grid-cols-[70%_30%] md:grid-cols-[70%_30%] grid-cols-1 gap-6">
            <div className="col-span-1">
              {blogs.map((blog) => {
                return (
                  <div key={blog.id}>
                    <div className="w-full">
                      <Image
                        src={blog.pic}
                        alt="img.png"
                        width={1000}
                        height={1000}
                        className="object-contain w-full"
                      />
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
                    <p className="text-3xl text-[#151875] font-bold font-josefin my-5">
                      {blog.title}
                    </p>
                    <p className="text-[#8A8FB9] text-md font-lato lg:text-start md:text-start text-justify leading-6">
                      {blog.desc}
                    </p>
                    <p className="mt-20 text-justify text-[#8A8FB9] text-md font-lato leading-6">
                      {blog.detail}
                    </p>
                    <div className="bg-[#FAFAFB] border-[#FC45A0] border-l-2 my-16 py-8">
                      <p className="text-justify text-lg ml-4 font-josefin leading-relaxed text-[#969CB4] italic">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Commodo dictum sapien, amet, consequat. <br />{" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Commodo dictum sapien, amet, consequat <br /> toamk
                        risusu”
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12 mt-14">
                <div className="col-span-1 relative">
                  {/* Video */}
                  <div>
                    <div>
                      <div className="relative h-auto w-auto">
                        <Image
                          src="/images/products/blog-image-15.png"
                          alt="img"
                          width={1000}
                          height={1000}
                          className="object-contain w-full h-auto"
                          onClick={() => {
                            const video = document.querySelector("video");
                            const img = document.querySelector("img");
                            if (video && img) {
                              if (video.style.display === "none") {
                                video.style.display = "block";
                                img.style.display = "none";
                                video.play();
                              } else {
                                video.style.display = "none";
                                img.style.display = "block";
                                video.pause();
                              }
                            }
                          }}
                        />
                        <video
                          src="/images/products/blog-video-1.mp4"
                          poster="/images/products/blog-video-1.mp4"
                          loop
                          autoPlay
                          className="md:w-[412px] md:h-[242px] object-cover absolute top-0 left-0 z-10 hidden"
                        ></video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div>
                    <Image
                      src="/images/products/blog-image-16.png"
                      alt="img"
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-justify text-[#8A8FB9] text-md font-lato mt-12 leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>
              </div>
              <div>
                <div className=" mt-12">
                  <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                    {relProdBlog.map((item) => {
                      return (
                        <Link href={`${item.href}/${item.name}`} key={item.id}>
                          <div key={item.id}>
                            <div className="col-span-1">
                              <div className="w-full mb-4">
                                <div className="flex justify-center w-full">
                                  <Image
                                    src={item.pic}
                                    alt="img"
                                    width={1000}
                                    height={1000}
                                    className="object-cover w-full h-auto lg:h-52 md:h-40 sm:h-32"
                                  />
                                </div>
                                <div>
                                  <p className="mx-3 font-josefin font-semibold text-sm">
                                    {item.name}
                                  </p>
                                </div>
                                <div className="flex justify-between text-[#151875] my-1 items-center text-xs">
                                  <p className="text-[#151875] font-josefin font-semibold">
                                    {item.Price}
                                  </p>
                                  <p className="text-pink-500 font-josefin font-semibold line-through">
                                    {item.oldPrice}
                                  </p>
                                  <div>{item.Rating}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-justify text-[#8A8FB9] text-md font-lato mt-12 leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>
              </div>
              <div>
                <p className="text-justify text-[#8A8FB9] text-md font-lato mt-16 leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>
              </div>
              <div className="mt-10 flex justify-center">
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
              <div className="flex justify-between text-[#A3A2B6] bg-[#F7F8FB] px-6 py-4 mt-6">
                <Link href={"#"}>
                  <div className="flex gap-2 items-center">
                    <p>
                      <FaArrowLeftLong />
                    </p>
                    <p>Previous Post</p>
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="flex gap-2 items-center">
                    <p>Next Post</p>
                    <p>
                      <FaArrowRightLong />
                    </p>
                  </div>
                </Link>
              </div>
              <div className="shadow-[0px_5px_10px_rgba(0,0,0,0.2)] mt-24">
                <div className="flex p-3 gap-3 items-center">
                  <div>
                    <Image
                      src="/images/products/comment-1.png"
                      alt="img.png"
                      width={1000}
                      height={1000}
                      className="h-32 w-32 object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex gap-4">
                      <p className="font-bold text-lg text-[#151875]">
                        Sapien ac
                      </p>
                      <p className="text-[#A3A2B6]">Jan 09 2020</p>
                    </div>
                    <p className="text-[#A3A2B6] leading-relaxed mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At in vitae rutrum vulputate consectetur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="shadow-[0px_5px_10px_rgba(0,0,0,0.2)] mt-10">
                <div className="flex p-3 gap-3 items-center">
                  <div>
                    <Image
                      src="/images/products/comment-2.png"
                      alt="img.png"
                      width={1000}
                      height={1000}
                      className="h-32 w-32 object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex gap-4">
                      <p className="font-bold text-lg text-[#151875]">
                        Augue conva
                      </p>
                      <p className="text-[#A3A2B6]">Aug 18 2020</p>
                    </div>
                    <p className="text-[#A3A2B6] leading-relaxed mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At in vitae rutrum vulputate consectetur.
                    </p>
                  </div>
                </div>
              </div>
              <form className="text-sm font-normal mt-28">
                <div className="lg:flex lg:justify-between gap-6">
                  <div className="mb-6 flex-1">
                    <div className="input-container relative">
                      <input
                        type="text"
                        className="py-4 px-8 border placeholder:text-base placeholder:text-[#8A8FB9] border-[#8A8FB9] w-full"
                        id="con_name"
                        placeholder="Your Name *"
                        required
                      />

                      <span className="absolute items-center top-4 left-3">
                        <FaUserAlt className="h-4 w-4 text-[#8A8FB9]" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-6 flex-1 relative">
                    <input
                      type="email"
                      className="py-4 px-8 border placeholder:text-base placeholder:text-[#8A8FB9] border-[#8A8FB9] w-full"
                      id="con_email"
                      placeholder="Write Your Email *"
                      required
                    />
                    <span className="absolute items-center top-[18px] left-3">
                        <TbMailFilled className="h-4 w-4 text-[#8A8FB9]" />
                    </span>
                  </div>
                </div>

                <div className="mb-6 relative">
                  <textarea
                    className="py-4 px-8 border border-[#8A8FB9] placeholder:text-[#8A8FB9] w-full"
                    id="con_message"
                    placeholder="Write your comment*"
                    rows={10}
                  ></textarea>
                  <span className="absolute items-center top-[18px] left-3">
                    <FaComment className="h-4 w-4 text-[#8A8FB9]" />
                  </span>
                </div>
                <div>
                  <input
                    type="button"
                    className="py-3 text-lg px-3 border border-gray-200 rounded-md text-white bg-pink-600 w-full hover:bg-pink-400 hover:cursor-pointer"
                    value={"Continue Shopping"}
                    required
                  />
                </div>
                <div className="mt-10 mb-24">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-3 w-3 rounded border-[#8A8FB9]"
                    />
                    <span className="text-[#8A8FB9]">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </span>
                  </label>
                </div>
              </form>
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
                          <p className="text-[#151875] font-lato">
                            Aug 09 2020
                          </p>
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
                          <p className="text-[#151875] font-lato">
                            Aug 09 2020
                          </p>
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
                          <p className="text-[#151875] font-lato">
                            Aug 09 2020
                          </p>
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
                          <p className="text-[#151875] font-lato">
                            Aug 09 2020
                          </p>
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
                          <p className="text-[#151875] font-lato">
                            Aug 09 2020
                          </p>
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
                          <p className="text-[#151875] font-lato">
                            Aug 09 2020
                          </p>
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
                          <p className="text-[#151875] font-lato">
                            Aug 09 2020
                          </p>
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
                <h1 className="font-bold font-josefin text-[#151875] text-lg mb-6">
                  Tags
                </h1>
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
        {/* Brand Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center flex-wrap gap-6">
              {logos.map((logo, index) => (
                <div key={index} className="w-full flex justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={1000}
                    height={1000}
                    className="h-auto w-auto"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
