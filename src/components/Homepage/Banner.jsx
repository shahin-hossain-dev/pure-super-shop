"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "@/lib/bannerData";

export default function Banner() {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === data.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div className="">
      <div className="w-full transform overflow-hidden rounded-b-lg h-96 md:h-[550px] lg:gap-10">
        {data.map((slide, index) => {
          const { img, title, des } = slide;
          return (
            <div
              className={`${
                index === currentSlider
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } absolute inset-0 duration-500 ease-linear`}
              key={`index_${index}`}
            >
              <Image
                src={img}
                width="1440"
                height="500"
                alt={title}
                className={`h-full w-full object-cover duration-500 ease-linear ${
                  index === currentSlider ? "scale-100" : "scale-105"
                }`}
              />
              <div className="absolute inset-0 flex flex-col top-1/2 md:left-4 -translate-y-1/2 md:w-1/2 drop-shadow-lg text-center md:text-left">
                <div className="rounded-md p-3">
                  <div className="mb-5 overflow-hidden text-xl font-semibold md:text-2xl lg:text-5xl">
                    <h1
                      className={`${
                        index === currentSlider ? "" : "translate-y-12"
                      } duration-500 ease-linear`}
                    >
                      {title}
                    </h1>
                  </div>
                  <div className="overflow-hidden text-sm md:text-base mb-10 lg:text-xl">
                    <p
                      className={`${
                        index === currentSlider ? "" : "-translate-y-12"
                      } duration-500 ease-linear`}
                    >
                      {des}
                    </p>
                  </div>
                  <Link
                    href="/products"
                    className="overflow-hidden text-sm md:text-base lg:text-lg bg-[#84b93e] py-4 px-7 text-white rounded-lg"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}