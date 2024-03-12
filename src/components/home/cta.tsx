"use client";
import { Button, Image } from "@nextui-org/react";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

interface CTAProps {}

const CTA: FC<CTAProps> = ({}) => {
  return (
    <article className="my-20 bg-[#F0F9FF] flex items-center gap-y-3 min-h-96 relative">
      {/* awan 1 */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
        className="absolute lg:left-20 left-5 top-5"
      >
        <Image src="/images/Awan_2.png" alt="awan2" height={150} width={150} />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
        className="absolute xl:right-[38%] md:right-[75%] right-[57%] lg:bottom-14 bottom-20"
      >
        <Image src="/images/Awan_3.png" alt="awan2" height={150} width={150} />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
        className="absolute lg:right-32 right-5 lg:top-16 top-32"
      >
        <Image src="/images/Awan_1.png" alt="awan2" height={150} width={150} />
      </motion.div>
      <section className="container py-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="order-2 lg:order-1 flex justify-center flex-col lg:items-start items-center lg:text-left text-center"
          >
            <h1 className="text-5xl font-bold tracking-[0.017em] leading-tight mb-5 ">
              Let&apos;s Make <br /> Something Great !!
            </h1>
            <Button
              size="lg"
              color="primary"
              radius="full"
              className="tracking-wider"
            >
              Let&apos;s Go!!!
            </Button>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="order-1 lg:order-2"
          >
            <Image
              src="/images/RocketLamp.png"
              alt="rocketLamp"
              width={120}
              height={120}
            />
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export default CTA;
