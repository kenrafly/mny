"use client";

import Header from "@/components/layout/admin/Header";
import Sidebar from "@/components/layout/admin/Sidebar";
import { ReactNode, useState } from "react";

interface AdminClientProps {
  children: ReactNode;
}

export default function AdminClient({ children }: AdminClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4 flex-1 overflow-auto">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
