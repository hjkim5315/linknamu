"use client";

import { useState } from "react";
import type { LinkItem } from "@/data/profile";

interface Props {
  link: LinkItem;
  initialCount: number;
}

export default function LinkCard({ link, initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  function handleClick() {
    setCount((c) => c + 1);
    // 페이지 이동과 무관하게 전송되도록 keepalive 사용
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: link.id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="glass flex items-center justify-between rounded-3xl px-6 py-5 transition-colors duration-300 ease-out hover:bg-white/55 dark:hover:bg-white/[0.12]"
    >
      <span className="font-semibold">{link.title}</span>
      <span className="text-xs font-medium tabular-nums text-[var(--muted)]">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
