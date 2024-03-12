import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Devta.id",
  description:
    "Kami memberikan pelayanan Website Development, Branding, dan Social Media Management sebagai solusi digital bagi kebutuhan bisnis dan perusahaan Anda, dengan kreativitas dan inovasi yang luar biasa!!",
  authors: [{ name: "radenagus17_", url: "https://radenagus17.vercel.app" }],
  icons: {
    icon: "/logo/devtalogo.png",
  },
  openGraph: {
    title: "Devta.id",
    url: "https://devta.id",
    type: "website",
    description:
      "Kami memberikan pelayanan Website Development, Branding, dan Social Media Management sebagai solusi digital bagi kebutuhan bisnis dan perusahaan Anda, dengan kreativitas dan inovasi yang luar biasa!!",
    siteName: "Devta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
