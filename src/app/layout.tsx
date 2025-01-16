import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const rounded1c = M_PLUS_Rounded_1c({
  variable: "--font-rounded-1c",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Amar saber",
  description: "Drª. Maria Paula começou sua carreira enfrentando os mesmos desafios os veterinários vivem hoje. Durante a graduação, sentiu a lacuna entre o ensino teórico e a realidade prática do mercado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${rounded1c.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
