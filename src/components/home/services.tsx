"use client";

import React, { FC, ReactElement } from "react";
import TittleAndSubtittle from "../atoms/tittleAndSubtittle";
import { Link, Spacer } from "@nextui-org/react";
import CardShadow from "../ui/cardShadow";
import { FiMonitor } from "react-icons/fi";
import { BsBrush } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

interface ServicesProps {}

interface ServicesType {
  icon: ReactElement;
  title: string;
  desc: string;
  path: ReactElement;
}

const OurServices: ServicesType[] = [
  {
    icon: <FiMonitor size={38} className="text-primary" />,
    title: "Web Development",
    desc: "Membantu perkembangan bisnis anda dengan teknologi terbaru",
    path: (
      <Link showAnchorIcon href="/" className="text-small">
        Learn More
      </Link>
    ),
  },
  {
    icon: <BsBrush size={38} className="text-primary" />,
    title: "Branding Design",
    desc: "Tingkatkan efektfitas brand anda untuk menarik pelanggan baru",
    path: (
      <Link showAnchorIcon href="/" className="text-small">
        Learn More
      </Link>
    ),
  },
  {
    icon: <ImMobile size={38} className="text-primary" />,
    title: "Social Media Management",
    desc: "Kelola Social Media Anda, untuk menaikkan insight bisnis & perusahaan",
    path: (
      <Link showAnchorIcon href="/" className="text-small">
        Learn More
      </Link>
    ),
  },
];

const Services: FC<ServicesProps> = ({}) => {
  return (
    <motion.article
      variants={fadeIn("up", 0.3)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.5 }}
      className="py-20"
    >
      <TittleAndSubtittle
        tittle="kami mengatasi semuanya"
        subtittle="layanan"
        description="Berikut adalah layanan kami, yang bisa Anda pilih sesuai dengan kebutuhan untuk kemajuan bisnis maupun perusahaan Anda."
      />
      <Spacer y={16} />
      <section className="container">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 place-items-center">
          {OurServices.map((item: ServicesType, idx: number) => (
            <CardShadow
              key={idx}
              header={item.icon}
              title={item.title}
              body={item.desc}
              footer={item.path}
            />
          ))}
        </div>
      </section>
    </motion.article>
  );
};

export default Services;
