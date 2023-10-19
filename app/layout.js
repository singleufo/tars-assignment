import Navbar from "@/components/Navbar";
import { mont } from "./font";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <div className="relative w-full navbarParent">
          <Navbar />
        </div>
        <div className="relative w-full pageParent">{children}</div>
      </body>
    </html>
  );
}
