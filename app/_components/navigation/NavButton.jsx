import Link from "next/link";
import React from "react";
import {
  GitBranch,
  Home,
  Instagram,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  User,
  X,
} from "lucide-react";
import ResponsiveComponent from "../ResponsiveComponent";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <GitBranch className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;

    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="z-50 absolute"
            style={{ transform: `translate(${x},${y})` }}
          >
            <Link
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-white rounded-full flex items-center justify-center"
              aria-label={label}
            >
              <span className="relative w-14 h-14 p-4 rounded-full border border-solid border-red-600/50 shadow-glass-inset cursor-pointer hover:shadow-glass-sm animate-spin-reverse hover:text-accent group-hover:pause ">
                {getIcon(icon)}
                <span className="absolute peer bg-transparent w-full h-full top-0 left-0"></span>
                <span className="text-white px-2 absolute hidden bg-black/20 top-0 left-full peer-hover:block translate-x-2 translate-y-2">
                  {label}
                </span>
              </span>
            </Link>
          </div>
        ) : (
          <div className="z-50 ">
            <Link
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center"
              aria-label={label}
            >
              <span className="relative w-14 h-14 p-4 rounded-full border border-solid border-red-600/50 shadow-glass-inset cursor-pointer hover:shadow-glass-sm  hover:text-accent">
                {getIcon(icon)}
              </span>
            </Link>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
