"use client";

// import { MyContext } from "@/app/providers";
// import { Badge } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useContext } from "react";

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
}

export type LinksType = {
  path: string;
  name: string;
};

export const links: LinksType[] = [
  {
    path: "/",
    name: "Beranda",
  },
  {
    path: "/",
    name: "Layanan",
  },
  {
    path: "/",
    name: "Blog",
  },
  {
    path: "/",
    name: "Portfolio",
  },
];

const Nav: FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const path = usePathname();

  // const { favorites } = useContext(MyContext);

  // let total: any = Array.isArray(favorites) ? favorites.length : 0;

  return (
    <div className={`${containerStyles}`}>
      {links.map((item: LinksType, i: number) => (
        <Link
          key={item.name + i}
          href={item.path}
          className={`capitalize ${linkStyles} hover:underline hover:underline-offset-[6px]`}
        >
          {/* {item.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )} */}
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
