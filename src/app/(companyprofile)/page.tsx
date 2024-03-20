import Partners from "@/components/home/partners";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Portfolios from "@/components/home/portfolios";
import CTA from "@/components/home/cta";
import WhyUs from "@/components/home/whyUs";
import Testimoni from "@/components/home/testimoni";
import Blog from "@/components/home/blog";
import ContactUs from "@/components/home/contactUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Services />
      <Portfolios />
      <CTA />
      <WhyUs />
      <Testimoni />
      <Blog />
      <ContactUs />
    </main>
  );
}
