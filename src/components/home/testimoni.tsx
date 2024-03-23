"use client";
import { Spacer, Avatar } from "@nextui-org/react";
import React, { FC, ReactElement } from "react";
import TittleAndSubtittle from "../atoms/tittleAndSubtittle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { RxAvatar } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";

import CardShadow from "../ui/cardShadow";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { fadeIn } from "@/utils/variants";

interface TestimoniProps {}

interface TestimoniType {
  header: ReactElement;
  body: string;
  isCentered?: boolean;
  footer: ReactElement;
}

const TestimoniArea: TestimoniType[] = [
  {
    header: (
      <div className="flex gap-3 items-center">
        <Avatar icon={<RxAvatar size={55} />} color="primary" />
        <div>
          {/* name */}
          <h4 className="font-semibold text-large">Wanna</h4>
          {/* position */}
          <h6 className="text-xs text-foreground-400">CEO</h6>
        </div>
      </div>
    ),
    body: "To help the progression of your business with the latest technology.",
    footer: (
      <div className="flex justify-between items-center w-full">
        <div className="inline-flex space-x-1 text-warning-400">
          {[0, 1, 2, 3, 4].map((item: number) => (
            <FaStar key={item} />
          ))}
        </div>
        {/* tanggal */}
        <i className="text-xs text-foreground-400">17 Jun 2023</i>
      </div>
    ),
  },
  {
    header: (
      <div className="flex gap-3 items-center">
        <Avatar icon={<RxAvatar size={55} />} color="primary" />
        <div>
          {/* name */}
          <h4 className="font-semibold text-large">Andi</h4>
          {/* position */}
          <h6 className="text-xs text-foreground-400">CEO</h6>
        </div>
      </div>
    ),
    body: "To help the progression of your business with the latest technology.",
    // isCentered: true,
    footer: (
      <div className="flex justify-between items-center w-full">
        <div className="inline-flex space-x-1 text-warning-400">
          {[0, 1, 2, 3, 4].map((item: number) => (
            <FaStar key={item} />
          ))}
        </div>
        <i className="text-xs text-foreground-400">20 Feb 2024</i>
      </div>
    ),
  },
  {
    header: (
      <div className="flex gap-3 items-center">
        <Avatar icon={<RxAvatar size={55} />} color="primary" />
        <div>
          {/* name */}
          <h4 className="font-semibold text-large">Ruslan</h4>
          {/* position */}
          <h6 className="text-xs text-foreground-400">Agency</h6>
        </div>
      </div>
    ),
    body: "To help the progression of your business with the latest technology.",
    footer: (
      <div className="flex justify-between items-center w-full">
        <div className="inline-flex space-x-1 text-warning-400">
          {[0, 1, 2, 3, 4].map((item: number) => (
            <FaStar key={item} />
          ))}
        </div>
        {/* tanggal */}
        <i className="text-xs text-foreground-400">20 Des 2023</i>
      </div>
    ),
  },
  {
    header: (
      <div className="flex gap-3 items-center">
        <Avatar icon={<RxAvatar size={55} />} color="primary" />
        <div>
          {/* name */}
          <h4 className="font-semibold text-large">Svetlana Cokorilo</h4>
          {/* position */}
          <h6 className="text-xs text-foreground-400">Agency</h6>
        </div>
      </div>
    ),
    body: `Ok. Thank you! I was glad to work with you`,
    footer: (
      <div className="flex justify-between items-center w-full">
        <div className="inline-flex space-x-1 text-warning-400">
          {[0, 1, 2, 3, 4].map((item: number) => (
            <FaStar key={item} />
          ))}
        </div>
        {/* tanggal */}
        <i className="text-xs text-foreground-400">13 Jan 2021</i>
      </div>
    ),
  },
  {
    header: (
      <div className="flex gap-3 items-center">
        <Avatar icon={<RxAvatar size={55} />} color="primary" />
        <div>
          {/* name */}
          <h4 className="font-semibold text-large">Arnold Pramudlta&apos;s</h4>
          {/* position */}
          <h6 className="text-xs text-foreground-400">Agency</h6>
        </div>
      </div>
    ),
    body:
      `Seller easy to communicate with, quick response, revision given as requested. The Appereance is made good and in accordance with identity of the company`.slice(
        0,
        77
      ) + "...",
    footer: (
      <div className="flex justify-between items-center w-full">
        <div className="inline-flex space-x-1 text-warning-400">
          {[0, 1, 2, 3, 4].map((item: number) => (
            <FaStar key={item} />
          ))}
        </div>
        {/* tanggal */}
        <i className="text-xs text-foreground-400">11 May 2022</i>
      </div>
    ),
  },
  {
    header: (
      <div className="flex gap-3 items-center">
        <Avatar icon={<RxAvatar size={55} />} color="primary" />
        <div>
          {/* name */}
          <h4 className="font-semibold text-large">Drew</h4>
          {/* position */}
          <h6 className="text-xs text-foreground-400">Agency</h6>
        </div>
      </div>
    ),
    body: `Thanks for your great job`,
    footer: (
      <div className="flex justify-between items-center w-full">
        <div className="inline-flex space-x-1 text-warning-400">
          {[0, 1, 2, 3, 4].map((item: number) => (
            <FaStar key={item} />
          ))}
        </div>
        {/* tanggal */}
        <i className="text-xs text-foreground-400">07 Feb 2024</i>
      </div>
    ),
  },
];

const Testimoni: FC<TestimoniProps> = ({}) => {
  return (
    <article className="py-20">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
      >
        <TittleAndSubtittle
          tittle="temui, client kami yang puas"
          subtittle="testimoni"
          description="Berikut adalah client - client yang puas dengan pelayanan kami dan telah menggunakan jasa dalam menyelesaikan masalah digital."
        />
      </motion.div>
      <Spacer y={12} />
      <motion.section
        variants={fadeIn("up", 0.5)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
        className="container"
      >
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={15}
          className="swiper-testimoni min-h-72"
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
        >
          {TestimoniArea.map((item: TestimoniType, idx: number) => (
            <SwiperSlide key={idx} className="p-4">
              <CardShadow {...item} />
            </SwiperSlide>
          ))}
          <div className="swiper-button image-swiper-button-next">
            <IoIosArrowDropright />
          </div>
          <div className="swiper-button image-swiper-button-prev">
            <IoIosArrowDropleft />
          </div>
        </Swiper>
      </motion.section>
    </article>
  );
};

export default Testimoni;
