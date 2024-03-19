import { Button } from "@nextui-org/react";
import React, { FC } from "react";
import HeroSwiper from "./heroSwiper";

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
            <Button
              color="primary"
              radius="full"
              className="xl:mt-10 mt-5 tracking-wide shadow-lg shadow-primary-200"
              size="lg"
            >
              Lihat Portofolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
