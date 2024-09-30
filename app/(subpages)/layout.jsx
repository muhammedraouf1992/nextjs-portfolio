import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen relative">
      {children}
      <Link
        href={"/"}
        className="fixed top-10 left-10 py-4 px-4 rounded-full border border-solid border-red-600/70 shadow-glass-inset hover:shadow-glass-sm backdrop-blur-md cursor-pointer"
      >
        <Home className="text-white" />
      </Link>
    </main>
  );
};

export default layout;
