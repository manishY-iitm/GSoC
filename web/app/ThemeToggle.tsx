"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "gsoc-launchpad-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initial = saved === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="tap rounded-tile border border-seam px-4 py-3 text-sm font-medium text-haze"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
