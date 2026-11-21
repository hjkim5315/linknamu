import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/data/profile";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let id: unknown;
  try {
    ({ id } = await req.json());
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }
  // 등록된 링크 id만 허용
  if (typeof id !== "string" || !links.some((l) => l.id === id)) {
    return NextResponse.json({ error: "unknown link" }, { status: 400 });
  }
  try {
    const col = await getClicksCollection();
    if (!col) return NextResponse.json({ ok: false, reason: "db not configured" });
    const res = await col.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );
    return NextResponse.json({ ok: true, count: res?.count ?? 1 });
  } catch (e) {
    console.error("클릭 수 기록 실패", e);
    return NextResponse.json({ error: "db error" }, { status: 500 });
  }
}
