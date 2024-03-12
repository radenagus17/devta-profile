"use client";
import { Button, Divider, Image } from "@nextui-org/react";
import React, { FC } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

interface ContactUsProps {}

const ContactUs: FC<ContactUsProps> = ({}) => {
  return (
    <article className="py-20">
      <section className="container">
        <div className="min-h-96 bg-primary rounded-xl lg:p-14 p-7">
          <div className="flex flex-col lg:flex-row gap-y-6 w-full lg:pl-7 pl-0">
            <div className="flex-1 space-y-8">
              <motion.h1
                variants={fadeIn("right", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="lg:text-5xl text-3xl capitalize font-bold text-white"
              >
                tingkatkan bisnis anda <br className="hidden lg:block" />
                bersama kami
              </motion.h1>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="lg:text-medium text-small text-foreground-200 max-w-screen-sm"
              >
                Ingin Bisnis dan Perusahaan anda lebih maju dan lebih menarik
                minat pelanggan anda? segera gunakan layanan kami untuk
                menaikkan value bisnis dan perusahaan anda!
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.6 }}
              className="basis-96 flex items-center justify-center lg:items-start"
            >
              <Image
                src="/images/Upper.png"
                alt="upper"
                width={230}
                height={230}
                className="lg:size-64 size-52"
              />
            </motion.div>
          </div>
          <div className="inline-flex w-full mt-7 items-center lg:space-x-3 space-x-0">
            <Divider className="bg-white h-1 lg:basis-[83%] basis-[50%]" />
            <div className="basis-72">
              <Button
                variant="light"
                color="default"
                className="text-white lg:text-large text-small"
                endContent={<FaCirclePlay />}
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ContactUs;
