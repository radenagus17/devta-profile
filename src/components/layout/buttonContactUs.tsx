import { Button } from "@nextui-org/react";
import React, { FC } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ButtonContactUsProps {
  containerStyle: string;
  size: "sm" | "lg" | "md" | undefined;
}

const ButtonContactUs: FC<ButtonContactUsProps> = ({
  containerStyle,
  size,
}) => {
  return (
    <Button
      radius="full"
      color="primary"
      size={size}
      className={containerStyle}
      endContent={
        <FaArrowRight className="group-hover:translate-x-2 transition" />
      }
    >
      Hubungi Kami
    </Button>
  );
};

export default ButtonContactUs;
