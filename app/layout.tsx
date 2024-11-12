import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/them-provider";

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
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {" "}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
