import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Silver Mountain Pte Ltd - Delivers unmatched excellence across suply chains worldwide",
  description:
    "Sliver Mountains Standing as a global leader in wholesale trading and logistics solutions, Silver mountain delivers unmatched excellence across suply chains worldwide. Our comprehensive services extends to products such as Oil and its Products, Natural Rubber, and Wood Pellets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
