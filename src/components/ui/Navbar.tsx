"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Home, Command } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const current = theme ?? "light";
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    // Fixed at bottom, centered horizontally, rounded pill shape
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 rounded-full border border-border bg-background/80 backdrop-blur-xl shadow-lg shadow-zinc-500/10 dark:shadow-black/20 transition-all duration-300 animate-in slide-in-from-bottom-6 fade-in">
      
      {/* Home / Logo Link */}
      <Link 
        href="/" 
        className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-muted transition-colors group"
      >
        <Home className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        <span className="font-bold text-sm text-foreground">zee.dev</span>
      </Link>

      {/* Vertical Divider */}
      <div className="w-px h-4 bg-border mx-1" />

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
      >
        {!mounted ? (
          <div className="w-5 h-5" />
        ) : theme === "dark" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>

      {/* Menu / Command Placeholder */}
       <button
        aria-label="Menu"
        className="p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
      >
        <Command className="w-5 h-5" />
      </button>

    </nav>
  );
}