import { Image } from "@nextui-org/react";
import React, { FC } from "react";

interface PartnersProps {}

interface PartnersType {
  logo: string;
  name: string;
  industry: string;
}

const parters: PartnersType[] = [
  {
    logo: "/logo/malltronik.png",
    name: "malltronik",
    industry: "marketplace",
  },
  {
    logo: "/logo/wansa.png",
    name: "wansa",
    industry: "digital academy",
  },
  {
    logo: "/logo/winulu.png",
    name: "winulu",
    industry: "islamic community",
  },
  {
    logo: "/logo/laundryland.png",
    name: "laundryland",
    industry: "UMKM",
  },
  {
    logo: "/logo/hotoimani.png",
    name: "hotoimani",
    industry: "community",
  },
  {
    logo: "/logo/zirex.png",
    name: "zirex",
    industry: "computer service",
  },
];

const Partners: FC<PartnersProps> = ({}) => {
  return (
    <button type="button" className="button_client">
      {/* round-1 */}
      {parters.map((el: PartnersType, idx: number) => (
        <span key={idx}>
          <div className="flex gap-x-4 items-center xl:text-base text-sm text-left uppercase tracking-[0.010em] font-medium xl:min-w-48 min-w-40">
            <Image
              src={el.logo}
              alt={el.name}
              width={70}
              height={70}
              className="shadow-small rounded-full xl:h-12 xl:w-12 h-8 w-8 object-contain"
            />
            <div>
              <h5>{el.name}</h5>
              <p className="text-foreground-400 text-xs capitalize">
                {el.industry}
              </p>
            </div>
          </div>
        </span>
      ))}
      {/* round-2 */}
      {parters.map((el: PartnersType, idx: number) => (
        <span key={idx}>
          <div className="flex gap-x-4 items-center xl:text-base text-sm text-left uppercase tracking-[0.010em] font-medium xl:min-w-48 min-w-40">
            <Image
              src={el.logo}
              alt={el.name}
              width={70}
              height={70}
              className="shadow-small rounded-full xl:h-12 xl:w-12 h-8 w-8 object-contain"
            />
            <div>
              <h5>{el.name}</h5>
              <p className="text-foreground-400 text-xs capitalize">
                {el.industry}
              </p>
            </div>
          </div>
        </span>
      ))}
    </button>
  );
};

export default Partners;
