import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { GoogleTagManager } from '@next/third-parties/google'

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
      <GoogleTagManager gtmId="GTM-KVQDGBX8" />
      <body
        className={`${rounded1c.variable} antialiased`}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVQDGBX8"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {children}
        <Footer />
      </body>
    </html>
  );
}
