import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TerpLogix | Cannabis Retail Intelligence",
  description:
    "TerpLogix is the intelligence layer between cannabis lab data, retail inventory, customer intent, and budtender service.",
  icons: {
    icon: "/brand/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
