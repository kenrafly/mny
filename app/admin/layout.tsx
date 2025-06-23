import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Image from "next/image";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <ClerkProvider>
      <div className="min-h-screen">
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Image
              src="/next.svg"
              alt="App Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <h1 className="text-xl font-semibold">Donghua MnY</h1>
          </div>
          <div className="flex items-center gap-3">
            <UserButton />
            <p>{user?.fullName}</p>
          </div>
        </header>
        <main className="p-4">{children}</main>
      </div>
    </ClerkProvider>
  );
}
