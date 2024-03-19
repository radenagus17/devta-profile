"use client";
import React, { FC } from "react";
import TittleAndSubtittle from "../atoms/tittleAndSubtittle";
import { Image, Spacer } from "@nextui-org/react";
import WhyUsText from "../atoms/whyUsText";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

interface WhyUsProps {}

const WhyUs: FC<WhyUsProps> = ({}) => {
  return (
    <article className="py-16">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
      >
        <TittleAndSubtittle
          tittle="keunggunlan kami dari yang lain"
          subtittle="kenapa kami?"
          description="Tim kami menawarkan pelayanan yang profesional dan memberikan hasil yang inovatif, sehingga membuat layanan kami berbeda dari yang lain."
        />
      </motion.div>
      <Spacer y={16} />
      <section className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:mt-5 mt-0 md:gap-y-9 gap-y-14">
          {/* text1 */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="flex justify-center items-center max-w-[88%] order-1"
          >
            <WhyUsText
              title="Profesional & Kreatif"
              subtitle="Kami yakin bahwa tim kami dapat memberikan Anda solusi yang profesional dan efektif dengan tepat waktu sesuai kebutuhan bisnis Anda."
            />
          </motion.div>
          {/* image1 */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="flex justify-center order-2"
          >
            <Image src="/images/1.png" alt="first" width={440} height={440} />
          </motion.div>
          {/* image2 */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="flex justify-center order-4 lg:order-3"
          >
            <Image src="/images/2.png" alt="first" width={340} height={340} />
          </motion.div>
          {/* text2 */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="flex justify-center items-center max-w-[88%] order-3 lg:order-4"
          >
            <WhyUsText
              title="Kualitas Terbaik"
              subtitle="Kami berkomitmen memberikan solusi yang inovatif dan kualitas terbaik dalam memenuhi visi dan ekspektasi yang di inginkan oleh setiap client kami. "
            />
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export default WhyUs;
