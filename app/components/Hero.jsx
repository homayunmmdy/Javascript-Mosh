import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {

  return (
    <div>
      <div className="h-full w-full">
        <div className="mx-auto py-10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 xl:col-span-9">
              <div>
                <div className="text-white relative mb-2">
                  Hello, I'm Homayoun
                  <hr className="border-yellow-600	absolute w-8 left-[-3rem] top-[50%] h-[1px]" />
                </div>
                <h1 className="text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide leading-loose text-white">
                  Endless learning is a journey of discovering new things
                </h1>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 xl:col-span-3">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-0 sm:col-span-4 md:hidden md:col-span-0">
                  <div className=" hidden sm:flex gap-4 items-center">
                    <span className="text-white">Scroll for more</span>
                    <FaArrowDown  className="animate-bounce" color="#ffbe00" size={25} />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-8 md:col-span-12"> <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                  <div className="relative w-full h-full">
                    <Image
                      width={340}
                      height={425}
                      alt="Homayoun"
                      src="/me.jpg"
                      className="absolute h-full w-full aspect-square	z-20 left-0 right-0"
                    />
                    <div className="absolute left-[-3rem] bottom-[0%] z-10	 w-full">
                      <hr className="border-yellow-600 h-[2px] w-full my-4" />
                      <hr className="border-yellow-600 h-[2px] w-full my-4" />
                      <hr className="border-yellow-600 h-[2px] w-full my-4" />
                      <hr className="border-yellow-600 h-[2px] w-full my-4" />
                    </div>
                  </div>
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;