import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/context/AuthContex";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Presta",
  description: "Reservez vos services du quotidien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className="w-[95%] m-auto box-border font-sans lg:w-[88%] xl:w-[91%] md:w-[94%] nine:w-[93%]">
            <Toaster />
            <Navbar />
            {children}
          </div>
          <Footer />
          </ThemeProvider>
        </Provider>
        </body>
    </html>
  );
}
