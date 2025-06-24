import AdminClient from "./client";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import "../globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ClerkProvider>
          <AdminClient>{children}</AdminClient>;
        </ClerkProvider>
      </body>
    </html>
  );
}
