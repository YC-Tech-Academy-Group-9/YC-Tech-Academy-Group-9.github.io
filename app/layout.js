import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YC Tech Academy Blog - Group 9",
  description:
    "Group 9's blog for YC Tech Academy's Backend Web Development Bootcamp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
