import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Being & Brand | Design & Development Agency",
  description:
    "Premium design and development agency specializing in UI/UX, branding, and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#fafafa]" suppressHydrationWarning>
        <Navbar />
        <main className="pt-[80px] max-md:pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
