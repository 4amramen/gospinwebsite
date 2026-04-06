import type { Metadata } from "next";
import { Inter, Playfair_Display, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pro Spin Agency",
  description:
    "Connecting brands with Vancouver's DJ community. DJ talent and music management for events, brand activations, and festivals.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${libreBaskerville.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
