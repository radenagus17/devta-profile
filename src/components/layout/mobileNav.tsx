import React, { FC, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Nav from "./nav";
import ButtonContactUs from "./buttonContactUs";

interface MobileNavProps {}

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav: FC<MobileNavProps> = ({}) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <nav className="md:hidden text-primary">
      <CgMenuRight
        className="text-3xl cursor-pointer"
        onClick={() => setOpenMenu(true)}
      />
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <Nav
          containerStyles="h-full flex flex-col justify-center items-center gap-y-8 font-bold text-2xl text-foreground"
          linkStyles="relative hover:text-primary transition-all"
        />
        <ButtonContactUs
          containerStyle="group shadow-lg shadow-primary-200 flex absolute z-30 left-[27%] bottom-24"
          size="md"
        />
      </motion.div>
    </nav>
  );
};

export default MobileNav;
