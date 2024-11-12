import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Team chat application",
  description: "Clone the discord",
  icons: "/svgs/code-file-svgrepo-com.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
