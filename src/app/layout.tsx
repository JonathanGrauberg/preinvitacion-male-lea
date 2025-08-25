import './globals.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BgmProvider from "../../components/BgmProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Male&Lea Boda",
  description: "Un evento imperdible",
  openGraph: {
    title: "¡Llegó la invitación! 💍",
    description:
      "Todo lo que necesitás: fecha, lugar, confirmación y más. Tocá para abrir ✨",
    url: "https://boda-male-lea.vercel.app/",
    siteName: "M+L Boda",
    images: [
      {
        url: "https://boda-male-lea.vercel.app/og/invitacion.jpg",
        width: 1200,
        height: 630,
        alt: "Invitación M+L",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "¡Llegó la invitación! 💍",
    description:
      "Todo lo que necesitás: fecha, lugar, confirmación y más. Tocá para abrir ✨",
    images: ["https://boda-male-lea.vercel.app/og/invitacion.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        
        
        <BgmProvider />
        {children}
        
        
      </body>
    </html>
  );
}

