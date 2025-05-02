import type React from "react";
import "@/app/globals.css";

export const metadata = {
  title: "yuchan's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <body className="overflow-y-scroll">{children}</body>
    </html>
  );
}
