"use client";
import React, { FC } from "react";
import TittleAndSubtittle from "../atoms/tittleAndSubtittle";
import { Spacer } from "@nextui-org/react";
import CustomCard from "../ui/customCard";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

interface PortfoliosProps {}

export interface PortfoliosType {
  bg: string;
  title: string;
  subtitle: string;
}

const MyPortfolios: PortfoliosType[] = [
  {
    bg: "bg-widing-card",
    title: "Widding.id",
    subtitle:
      "Aplikasi wedding planner yang memiliki berbagai fitur penting, untuk acara pernikahan.",
  },
  {
    bg: "bg-applass-card",
    title: "APPLASS",
    subtitle:
      "Aplikasi yang dibangun untuk memudahkan perusahaan dalam memanajemen dokumen.",
  },
  {
    bg: "bg-ptsp-card",
    title: "PTSP",
    subtitle:
      "Aplikasi dengan sistem yang dibentuk dengan tujuan membantu penilaian karyawan",
  },
  {
    bg: "bg-master-group-card",
    title: "Master-Group",
    subtitle:
      "Membantu perusahaan menaikkan value dan engagement,melalui design content sosmed",
  },
  {
    bg: "bg-sentafition-card",
    title: "Sentafition",
    subtitle:
      "Manajement content social media salah satu produk health & beauty.",
  },
  {
    bg: "bg-winulu-card",
    title: "Winulu",
    subtitle:
      "Landing page komunitas muslim yang berpusat pada indonesia timur.",
  },
];

const Portfolios: FC<PortfoliosProps> = ({}) => {
  return (
    <article className="py-16">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
      >
        <TittleAndSubtittle
          tittle="project terbaik kami"
          subtittle="portfolio"
          description="Kami telah banyak menjalin kerjasama dengan perusahaan, instansi & bisnis owner, dengan memberikan layanan dan produk terbaik."
        />
      </motion.div>
      <Spacer y={16} />
      <section className="container">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 place-items-center"
        >
          {MyPortfolios.map((item: PortfoliosType, idx: number) => (
            <CustomCard key={idx} {...item} />
          ))}
        </motion.div>
      </section>
    </article>
  );
};

export default Portfolios;
