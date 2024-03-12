import React, { FC } from "react";

interface TittleAndSubtittleProps {
  tittle: string;
  subtittle: string;
  description: string;
}

const TittleAndSubtittle: FC<TittleAndSubtittleProps> = ({
  tittle,
  subtittle,
  description,
}) => {
  return (
    <section className="text-center flex items-center justify-center container flex-col">
      <h4 className="text-primary capitalize xl:text-large text-base">
        {subtittle}
      </h4>
      <h1 className="capitalize xl:text-4xl text-3xl font-semibold tracking-wide mt-1">
        {tittle}
      </h1>
      <p className="text-foreground-400 mt-5 text-small xl:text-medium">
        {description}
      </p>
    </section>
  );
};

export default TittleAndSubtittle;
