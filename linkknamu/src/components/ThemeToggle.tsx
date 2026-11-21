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
      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-lg transition hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800"
    >
      <span suppressHydrationWarning>{dark ? "☀️" : "🌙"}</span>
    </button>
  );
}
