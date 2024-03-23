import React, { FC, ReactElement } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
} from "@nextui-org/react";

interface CardShadowProps {
  header: ReactElement;
  title?: string;
  body: string;
  isCentered?: boolean;
  footer: ReactElement;
}

const CardShadow: FC<CardShadowProps> = ({
  header,
  title,
  body,
  footer,
  isCentered,
}) => {
  return (
    <Card
      className={`lg:min-w-[378px] max-w-[400px] min-h-[240px] px-7 py-5 ${
        isCentered ? "bg-primary-400/90" : ""
      }`}
      shadow="sm"
    >
      <CardHeader className="flex gap-3 pt-7">{header}</CardHeader>
      <CardBody className="gap-y-2 max-w-72">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p
          className={`${
            isCentered ? "text-foreground-100" : "text-foreground-400"
          } text-small`}
        >
          {body}
        </p>
      </CardBody>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};

export default CardShadow;
