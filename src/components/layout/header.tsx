import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import Logo from "./logo";
import Nav from "./nav";
import MobileNav from "./mobileNav";
import ButtonContactUs from "./buttonContactUs";

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
  const [header, setHeader] = useState<boolean>(false);

  useLayoutEffect(() => {
    var f = () => (window.scrollY > 50 ? setHeader(true) : setHeader(false));
    window.addEventListener("scroll", f);

    return () => window.removeEventListener("scroll", f);
  });

  return (
    <header
      className={`${
        header ? "py-4 shadow-lg" : "py-6"
      } sticky top-0 z-30 transition-all bg-white duration-400`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles={"hidden md:flex gap-x-14 items-center"}
              linkStyles="relative hover:text-primary transition-all"
              // underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            {/* <ThemeToggler /> */}
            <MobileNav />
          </div>
          <ButtonContactUs
            containerStyle="group shadow-lg shadow-primary-200 lg:flex hidden"
            size="lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
