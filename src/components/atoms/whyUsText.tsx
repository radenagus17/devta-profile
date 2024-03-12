import React, { FC } from "react";

interface WhyUsTextProps {
  title: string;
  subtitle: string;
}

const WhyUsText: FC<WhyUsTextProps> = ({ title, subtitle }) => {
  return (
    <div className="space-y-3">
      <h1 className="font-semibold lg:text-3xl text-2xl">{title}</h1>
      <p className="text-foreground-400 lg:text-medium text-small max-w-[28rem]">
        {subtitle}
      </p>
    </div>
  );
};

export default WhyUsText;
