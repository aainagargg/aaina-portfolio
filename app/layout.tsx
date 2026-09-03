import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaina Garg",
  description:
    "Machine learning engineer and AI governance researcher — Toronto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
