"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface HeroSwiperProps {
  containerStyles: string;
}

interface TypeSlider {
  name: string;
  icon: string;
}

const TextSlider: TypeSlider[] = [
  {
    name: "Innovative",
    icon: "/images/Rocket.png",
  },
  {
    name: "Efficient",
    icon: "/images/Time.png",
  },
  {
    name: "Solution",
    icon: "/images/Lamp.png",
  },
];

const HeroSwiper: FC<HeroSwiperProps> = ({ containerStyles }) => {
  return (
    <div className={containerStyles}>
      <Swiper
        modules={[Autoplay, Pagination]}
        direction="vertical"
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="xl:h-[25rem] h-[20rem]"
        pagination={{
          clickable: false,
        }}
      >
        {TextSlider.map((item: TypeSlider, idx: number) => (
          <SwiperSlide key={idx}>
            <div className="w-full flex items-center justify-center h-full relative">
              <motion.h1
                initial={{ y: "-25%" }}
                whileInView={{ y: 0 }}
                transition={{ type: "spring", damping: 8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="tracking-wider uppercase xl:text-[10rem] text-6xl text-primary/25 font-bold"
              >
                {item.name}
              </motion.h1>
              <motion.div
                initial={{ y: "-17%" }}
                whileInView={{ y: 0 }}
                transition={{ type: "spring", damping: 5 }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="w-48 h-48 xl:h-[18rem] xl:w-[18rem] object-contain"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
