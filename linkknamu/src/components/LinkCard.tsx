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
      className="flex items-center justify-between rounded-xl border-2 border-neutral-300 px-5 py-4 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md dark:border-neutral-600 dark:hover:border-emerald-400"
    >
      <span className="font-medium">{link.title}</span>
      <span className="text-sm text-neutral-500 dark:text-neutral-400">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
