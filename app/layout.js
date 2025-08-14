import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-black/90 border-t border-gray-800 text-gray-400 py-8 mt-12">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
    {/* Left: Brand & Legal */}
    <p className="text-sm">
      © {new Date().getFullYear()} <span className="font-semibold text-white">Priyanshu</span> — All Rights Reserved
    </p>

    {/* Center: Links */}
    <div className="flex space-x-6 text-sm">
      <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
      <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
      <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
    </div>

    {/* Right: Optional Social Icons */}
    <div className="flex space-x-4">
      {/* Example icons, use real ones */}
      <a href="#" className="hover:text-white transition-colors duration-200">🐦</a>
      <a href="#" className="hover:text-white transition-colors duration-200">💼</a>
      <a href="#" className="hover:text-white transition-colors duration-200">🐙</a>
    </div>
  </div>
</footer>


          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
