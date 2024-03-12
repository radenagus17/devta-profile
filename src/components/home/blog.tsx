"use client";
import { Image, Link } from "@nextui-org/react";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

interface BlogProps {}

interface BlogType {
  image: string;
  title: string;
  subtitle: string;
  path: string;
}

const blogs: BlogType[] = [
  {
    image: "/images/blog/blogImg1.jpg",
    title: "Telkom akan punya metaverse!",
    subtitle:
      "Telkom ikut masuk ke dunia digital Metaverse. Metanesia bakal ditunjukkan dalam acara Digiland...",
    path: "/",
  },
  {
    image: "/images/blog/blogImg2.jpg",
    title: "Properti virtual dalam metaverse, Booming!",
    subtitle:
      "Saat ini semakin banyak perusahaan investasi yang mengakuisisi lahan digital...",
    path: "/",
  },
  {
    image: "/images/blog/blogImg3.jpg",
    title: "Kunci sukses dalam melakukan branding",
    subtitle:
      "Perkembangan dunia digital tak hanya membuka peluang bagi para pemilik brand tertentu...",
    path: "/",
  },
  {
    image: "/images/blog/blogImg4.jpg",
    title: "Pentingnya SEO untuk strategi digital kamu",
    subtitle:
      "SEO punya peranan krusial dalam dunia digital untuk meng-optimasi konten yang dipublikasikan...",
    path: "/",
  },
];

const Blog: FC<BlogProps> = ({}) => {
  return (
    <article className="py-16">
      <motion.section
        variants={fadeIn("up", 0.3)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="container"
      >
        <div className="space-y-1 mb-9">
          <h5 className="text-primary">Blog</h5>
          <h1 className="text-3xl font-semibold capitalize">
            jelajahi update terbaru dunia digital
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-7 grid-cols-1 justify-items-center">
          {blogs.map((blog: BlogType, idx: number) => (
            <div key={idx} className="max-w-64">
              <div className="relative after:absolute after:inset-0 after:bg-black/40 max-w-fit after:z-20 after:rounded-xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={270}
                  height={270}
                />
              </div>
              <div className="space-y-2 mt-3 max-w-fit">
                <h4 className="font-semibold text-large">{blog.title}</h4>
                <p className="text-foreground-400 text-small">
                  {blog.subtitle}
                </p>
                <Link size="sm" isExternal showAnchorIcon href={blog.path}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </article>
  );
};

export default Blog;
