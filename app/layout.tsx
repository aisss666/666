import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Sriracha } from 'next/font/google';
import PLATFORM from "@/contents/platform.json"

export const metadata: Metadata = {
  title: PLATFORM.companyName + " - Great to help you",
  description: PLATFORM.description,
  openGraph: {
    title: PLATFORM.companyName + " - Great to help you",
    description: PLATFORM.description
  }
};

const sriracha = Sriracha({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sriracha',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sriracha.variable}>
      <Head> 
          <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      </Head>
      <body
        className={`antialiased`}
      >
        <div className="min-h-screen w-full bg-gradient-to-b from-blue-950 to-black">
          {children}
        </div>
        <footer className="bg-gray-800 border-t py-6 text-center text-2xl text-white">
          © {new Date().getFullYear()} Aisss666. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
