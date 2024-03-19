import { Button } from "@nextui-org/react";
import React, { FC } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Nav from "./nav";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="min-h-80 bg-[#031428] py-8 text-center mt-20">
      <div>
        <h1 className="text-white lg:text-5xl text-3xl font-bold uppercase tracking-wider">
          Devta
        </h1>
        <h4 className="text-white lg:text-large text-xs">
          Teknologi Indonesia
        </h4>

        <p className="text-foreground-300 lg:text-small text-xs max-w-screen-md mx-auto py-4 px-7 lg:px-0">
          Devta is a growing software company based in Makassar, Indonesia. Our
          scope of work focuses on planning, development and management of
          systems and applications for small to medium-sized enterprises (SMEs).
        </p>

        <ul className="inline-flex gap-3 mb-5">
          <Button
            isIconOnly
            color="default"
            size="sm"
            aria-label="Tiktok"
            radius="full"
          >
            <FaTiktok size={20} />
          </Button>
          <Button
            isIconOnly
            color="default"
            size="sm"
            aria-label="Instagram"
            radius="full"
          >
            <FaInstagram size={20} />
          </Button>
          <Button
            isIconOnly
            color="default"
            size="sm"
            aria-label="Facebook"
            radius="full"
          >
            <FaFacebookF size={20} />
          </Button>
        </ul>
        <Nav
          containerStyles="flex gap-6 text-white justify-center"
          linkStyles="relative hover:text-primary transition-all text-sm lg:text-medium"
        />
        <p className="lg:text-sm text-xs text-foreground-300 mt-1">
          2024 Devta.co.id, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
