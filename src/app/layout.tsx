import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Anas Rashid — Full Stack Engineer",
  description: "Full stack engineer based in Karachi with 3 years of experience in Node.js, React, Next.js, AWS, logistics, e-commerce, and IoT applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
