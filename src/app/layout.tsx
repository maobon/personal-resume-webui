import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Resume",
  description: "Personal resume website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full bg-slate-900 text-slate-400 leading-relaxed selection:bg-teal-300 selection:text-teal-900 relative z-0">
        <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
