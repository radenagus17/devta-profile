import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Providers from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Devta | Your Digital Teams",
  description:
    "Kami memberikan pelayanan Website Development, Branding, dan Social Media Management sebagai solusi digital bagi kebutuhan bisnis dan perusahaan Anda, dengan kreativitas dan inovasi yang luar biasa!!",
  authors: [{ name: "radenagus17_", url: "https://radenagus17.com" }],
  icons: {
    icon: "/logo/favicon.png",
  },
  openGraph: {
    title: "Devta | Your Digital Teams",
    url: "https://devta.co.id",
    type: "website",
    description:
      "Kami memberikan pelayanan Website Development, Branding, dan Social Media Management sebagai solusi digital bagi kebutuhan bisnis dan perusahaan Anda, dengan kreativitas dan inovasi yang luar biasa!!",
    siteName: "Devta | Your Digital Teams",
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
