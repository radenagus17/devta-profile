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
        width={180}
        height={180}
        priority
        quality={100}
      />
    </Link>
  );
};

export default Logo;
