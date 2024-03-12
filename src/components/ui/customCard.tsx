import React, { FC } from "react";
import { PortfoliosType } from "../home/portfolios";

interface CustomCardProps extends PortfoliosType {}

const CustomCard: FC<CustomCardProps> = ({ bg, title, subtitle }) => {
  return (
    <div
      className={`rounded-2xl py-7 px-10 relative group ${bg} bg-no-repeat bg-cover max-w-[378px] max-h-[418px] shadow-medium cursor-pointer`}
    >
      <div className="absolute inset-x-0 bottom-0 top-0 lg:group-hover:top-56 group-hover:top-40 transition-all bg-black/25 rounded-2xl shadow-medium" />
      <div className="relative text-white flex flex-col justify-end gap-y-2 items-start lg:h-[18em] h-[16em]">
        <h1 className="text-xl font-semibold drop-shadow">{title}</h1>
        <p className="text-small drop-shadow">{subtitle}</p>
      </div>
    </div>
  );
};

export default CustomCard;
