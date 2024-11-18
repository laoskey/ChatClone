import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/them-provider";
import { cn } from "@/lib/utils";

// import { extractRouterConfig } from "uploadthing/server";
// import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
// import { ourFileRouter } from "@/app/api/uploadthing/core";
import ModalProvider from "@/components/providers/ModalProvider";

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
<<<<<<< HEAD
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.className, "bg-white dark:bg-[#333]")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            storageKey="discord-theme"
          >
=======
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        suppressHydrationWarning
      >
        <body
          className={cn(inter.className, "bg-white dark:bg-[#333]")}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            storageKey='discord-theme'
          >
            {/* <NextSSRPlugin
              routerConfig={extractRouterConfig(ourFileRouter)}
            /> */}
>>>>>>> 7a3f934cf14d78dabd290d879816992c97785cfb
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
