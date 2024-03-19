import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo/devta.png"}
        alt="logo"
        width={172}
        height={172}
        priority
        quality={100}
      />
    </Link>
  );
};

export default Logo;
