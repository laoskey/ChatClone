import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/them-provider";
import { ModeToggle } from "@/components/modal-toggle";

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
      <html
        lang='en'
        suppressHydrationWarning
      >
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
            storageKey='discord-theme'
          >
            {children}
            <ModeToggle />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
