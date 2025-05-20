"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";

export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="border-b border-border">
      <div className="container px-4 py-4 mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <CodeIcon className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Source Map Unminifier</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </header>
  );
}