import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ByteSpace – Get access to hundreds of courses",
  description:
    "Unlock your creativity and grow your business with our wide range of courses.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.className}  antialiased`}>
      <body className="min-h-full flex flex-col">{children}<Footer /></body>
    </html>
  );
}
