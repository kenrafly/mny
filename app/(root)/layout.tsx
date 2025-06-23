// app/(root)/layout.tsx
import "../globals.css";
import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";

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
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
