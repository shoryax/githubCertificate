"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  active?: boolean;
}

export function NavItem({ href, label, icon: Icon, active }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full",
          "hover:bg-gray-700/50 hover:text-white hover:scale-105 hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          active
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground"
        )}
      >
        <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
        <span className="hidden sm:inline">{label}</span>
      </Link>
    </li>
  );
}

