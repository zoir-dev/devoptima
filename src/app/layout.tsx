import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevOptima",
  description: "DevOptima official website.",
  icons: [
    {
      protocol: "https",
      url: 'https://test-task-pixel-point-dev.vercel.app/_next/static/media/2bfc350dedb4b3e8d71e5e8302815583.svg'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="2xl:container 2xl:pt-20 px-4 2xl:px-0 mx-auto">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
