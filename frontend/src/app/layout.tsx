import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "The Good AI Lab",
  description: "Collaborative AI Research and Responsible AI Advocacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
