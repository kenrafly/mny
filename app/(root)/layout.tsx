// app/(root)/layout.tsx
import "../globals.css";
import React from "react";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-6 md:px-12 py-4">{children}</body>
    </html>
  );
}
