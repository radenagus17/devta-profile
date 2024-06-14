"use client";
import React, { FC } from "react";
import HeroSwiper from "./heroSwiper";
import { Link } from "react-scroll";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="xl:h-[88dvh] h-[85dvh] xl:bg-contain bg-auto bg-hero bg-no-repeat bg-bottom relative">
      <HeroSwiper containerStyles="absolute inset-0" />
      <div className="container mx-auto h-full">
        <div className="relative h-full">
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-12 text-center w-full">
            <h1 className="xl:text-3xl text-large font-semibold tracking-[0.014em]">
              Solusi <span className="text-primary">Digital,</span> Dengan hasil{" "}
              <span className="text-primary">Maksimal</span>
            </h1>
            <p className="max-w-screen-lg my-3 mx-auto text-xs xl:text-base">
              Kami memberikan pelayanan Website Development, Branding, dan
              Social Media Management sebagai solusi digital bagi kebutuhan
              bisnis dan perusahaan Anda, dengan kreativitas dan inovasi yang
              luar biasa!!
            </p>

            <div className="xl:mt-10 mt-7">
              <Link
                offset={-30}
                to="portfolio"
                smooth
                duration={500}
                className="tracking-wide shadow-lg shadow-primary-200 bg-primary xl:py-4 xl:px-7 py-3 px-5 rounded-full cursor-pointer text-white hover:bg-primary/70 transition duration-300 text-small xl:text-medium"
                isDynamic
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
