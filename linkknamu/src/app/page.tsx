import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-10">
      <ThemeToggle />
      {/* 와이어프레임의 둥근 테두리 카드 */}
      <div className="w-full max-w-sm rounded-[2rem] border-2 border-neutral-800 px-6 py-10 dark:border-neutral-300">
        <ProfileHeader profile={profile} />
        <section className="mt-8 flex flex-col gap-6" aria-label="링크 목록">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              initialCount={counts[link.id] ?? 0}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
