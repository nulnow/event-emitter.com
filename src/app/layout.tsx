import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event-Emitter.com",
  description: "Easy way to copy event emitter to your code. With great power comes great responsibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        // style={{ backgroundColor: '#101010' }}
      >
        {children}
      </body>
    </html>
  );
}
