import Image from "next/image";
import Link from "next/link";
import { MdDashboard, MdMovie } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar?: () => void;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/admin",
      icon: <MdDashboard size={24} />,
    },
    {
      id: "movies",
      label: "Movies",
      path: "/admin/movies",
      icon: <MdMovie size={24} />,
    },
    {
      id: "users",
      label: "Users",
      path: "/admin/users",
      icon: <FaUsers size={24} />,
    },
  ];

  return (
    <>
      <div
        className={`flex flex-col bg-gray-900 h-screen ${
          isMobile
            ? "transition-all duration-500 ease-in-out"
            : "transition-all duration-300 ease-in-out"
        } ${
          isMobile
            ? isOpen
              ? "fixed top-0 left-0 w-64 z-50 shadow-xl"
              : "fixed top-0 -left-full w-0"
            : isOpen
            ? "w-56"
            : "w-[60px]"
        }`}
      >
        <div
          className={`flex items-center justify-center gap-3 ${
            isOpen ? "p-4" : "pl-4"
          }`}
        >
          <Image
            src="/next.svg"
            alt="App Logo"
            width={32}
            height={32}
            className="dark:invert"
          />
          <h1
            className={`text-xl font-semibold overflow-hidden transition-all duration-300 ${
              isOpen ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
            }`}
          >
            Donghua MnY
          </h1>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2">
            {navigationItems.map(item => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-all duration-300 ${
                    isOpen ? "justify-start" : "justify-center"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 ${
                      isOpen ? "" : "pl-4"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`ml-3 whitespace-nowrap transition-all duration-300 ${
                      isOpen
                        ? "opacity-100 max-w-[200px]"
                        : "opacity-0 max-w-0 overflow-hidden"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            if (toggleSidebar) {
              toggleSidebar();
            }
          }}
        />
      )}
    </>
  );
}
