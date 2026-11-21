"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="glass absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-base transition-colors duration-300 hover:bg-white/55 dark:hover:bg-white/[0.12]"
    >
      <span suppressHydrationWarning>{dark ? "☀️" : "🌙"}</span>
    </button>
  );
}
