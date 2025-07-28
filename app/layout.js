import { Outfit, Ovo } from "next/font/google";
import "./globals.css";



const outfit = Outfit({
  subsets : ["latin"],
  variable:"--font-outfit", weight : ["400", "500", "600","700"], 
});

const ovo = Ovo({
  subsets: ["latin"], weight : ["400"],
  variable: "--font-ovo",
});


export const metadata = {
  title: "Portfolio - Rane",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
        overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
