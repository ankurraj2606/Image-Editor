import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Image Editor By Ankur",
  description: "Image Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
