"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { FiMenu } from "react-icons/fi";

type HeaderProps = {
  toggleSidebar: () => void;
};

export default function Header({ toggleSidebar }: HeaderProps) {
  const { user } = useUser();

  return (
    <header className="flex justify-between items-center p-3 border-b border-gray-700">
      <div className="flex items-center">
        <button
          className="focus:outline-none group p-2 rounded-full hover:bg-gray-800 transition-colors"
          onClick={toggleSidebar}
        >
          <FiMenu className="text-gray-400 w-5 h-5 cursor-pointer group-hover:text-white" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <UserButton />
        {user?.fullName && <p className="text-sm">{user.fullName}</p>}
      </div>
    </header>
  );
}
