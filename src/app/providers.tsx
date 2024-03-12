"use client";

import React, { FC } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <NextUIProvider>
      <Header />
      {children}
      <Footer />
    </NextUIProvider>
  );
};

export default Providers;
