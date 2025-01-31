import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-[#F2F0FF] min-h-screen lg:h-[764px] w-full flex items-center justify-center py-12 lg:py-0">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative px-4">
          {/* Lamp Decoration */}
          <div className="hidden lg:block absolute md:top-[-150px] md:left-[-150px]">
            <Image
              src="/images/home_banner/lamp.png"
              alt="Lamp"
              width={187}
              height={187}
              className="lg:w-[357px] lg:h-[357px]"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-16">
            {/* Hero Text */}
            <div className="flex flex-col space-y-4 max-w-lg text-center lg:text-left px-4 lg:px-0">
              <p className="text-[#FB2E86] font-lato text-base sm:text-[16px]">
                Best Furniture For Your Castle...
              </p>
              <h1 className="text-2xl sm:text-4xl josefin font-bold text-gray-900 leading-tight">
                New Furniture Collection <br className="hidden sm:block" />{" "}
                Trends in 2020
              </h1>
              <p className="font-lato text-sm sm:text-base px-2 sm:px-0 text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link href={"/GridPage"}>
                  <button className="px-6 py-3 w-[163px] h-[50px] bg-[#FB2E86] text-white font-lato text-sm rounded hover:bg-pink-600 transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex-shrink-0 mt-8 lg:mt-0">
              <div className="absolute -top-4 -right-4 sm:-top-4 sm:-right-4 w-[320px] h-[320px] sm:w-[448px] sm:h-[448px] lg:w-[648px] lg:h-[648px] bg-[#ECD2FA59] rounded-full"></div>
              <div className="absolute -top-2 -right-2 sm:-top-0 sm:-right-0 w-[320px] h-[320px] sm:w-[451px] sm:h-[451px] lg:w-[651px] lg:h-[651px] bg-[#ECD2FA59] rounded-full"></div>

              <div className="absolute top-4 right-4 lg:right-[-0px] lg:top-[5px] bg-[#00C1FE] text-white text-[25px] lg:text-[35px] font-josefin font-bold px-4 py-2 lg:px-6 lg:py-4 rounded-full z-10">
                50% <br /> off
              </div>

              <Image
                src="/images/home_banner/Shell-Shaped-Armchair.png"
                alt="Furniture Chair"
                width={1000}
                height={1000}
                className="rounded-md w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[629px] lg:h-[629px] relative z-0"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>

          {/* Sliding Dots */}
          <div className="flex space-x-2 mt-6 absolute bottom-0 sm:bottom-0 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none">
            <div className="w-[10px] h-[9.89px] bg-[#FB2E86] rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
