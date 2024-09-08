"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';


const data = [
    {
      img: '/assets/Banner_Image/kitchen.jpg',
      title: 'Kitchen Serenity',
      des: 'Discover the charm of a well-organized kitchen. A perfect place to cook, relax, and enjoy culinary adventures.',
    },
    {
      img: '/assets/Banner_Image/Book.jpg',
      title: 'Golden Book Canopy',
      des: 'Delve into the pages of knowledge and imagination under the golden canopy of books. A haven for readers and thinkers.',
    },
    {
      img: '/assets/Banner_Image/Woman_cloth.png',
      title: 'Urban Woman Exploration',
      des: 'Embrace urban fashion with style and grace. A thrilling journey through contemporary women\'s clothing trends.',
    },
    {
      img: '/assets/Banner_Image/man_cloth.jpg',
      title: 'Man Cloth Mystery',
      des: 'Explore the enigmatic allure of modern men\'s clothing. A perfect setting for those with a taste for fashion and sophistication.',
    },
    {
      img: '/assets/Banner_Image/furniture.jpeg',
      title: 'Furniture Blossom Bliss',
      des: 'Revel in the comfort and elegance of well-crafted furniture. An ideal retreat for those seeking beauty and functionality in their living spaces.',
    }
  ];
  

export default function Banner () {
    const [currentSlider, setCurrentSlider] = useState(0);

    
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === data.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
          <div className="">
              <div className="h-72 w-full transform overflow-hidden rounded-lg before:bg-black/50 sm:h-80 md:h-[400px] lg:gap-10">
                  {data.map((slide, index) => {
                      const { img, title, des } = slide;
                      return (
                          <div className={`${index === currentSlider ? 'visible opacity-100' : 'invisible opacity-0'} absolute inset-0 duration-500 ease-linear`} key={`index_${index}`}>
                              <Image
                                  src={img}
                                  width="500"
                                  height="500"
                                  alt={title}
                                  className={`h-full w-full object-cover duration-500 ease-linear ${index === currentSlider ? 'scale-100' : 'scale-105'}`}
                              />
                              <div className="absolute inset-0 flex flex-col bg-black/40 p-5 text-center text-white drop-shadow-lg">
                                  <div className="mb-0 mt-auto rounded-md  p-3">
                                      <div className="mb-3 overflow-hidden text-xl font-semibold lg:text-3xl">
                                          <h1 className={`${index === currentSlider ? '' : 'translate-y-12'} duration-500 ease-linear`}>{title}</h1>
                                      </div>
                                      <div className="overflow-hidden text-sm md:text-base lg:text-lg">
                                          <p className={`${index === currentSlider ? '' : '-translate-y-12'} duration-500 ease-linear`}>{des}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      );
                  })}
              </div>
              {/* slider container */}
              <div className="flex  items-center justify-center gap-3 p-2">
                  {data.map((slide, index) => {
                      const { img, title } = slide;
                      return (
                          <Image
                              key={index}
                              src={img}
                              width={1200}
                              height={600}
                              className={`h-6 w-10 bg-black/20 sm:h-8 md:h-12 md:w-20 ${currentSlider === index ? 'opacity-100 ring ring-sky-500' : 'opacity-60'} box-content cursor-pointer rounded-md md:rounded-lg`}
                              alt={title}
                              onClick={() => setCurrentSlider(index)}
                          />
                      );
                  })}
              </div>
          </div>
    );
};
