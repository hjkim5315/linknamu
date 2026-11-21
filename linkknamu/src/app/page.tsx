import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="relative flex min-h-screen items-center justify-center px-8 py-20 sm:px-6">
      <ThemeToggle />
      <div className="w-full max-w-sm">
        <ProfileHeader profile={profile} />
        <section className="mt-12 flex flex-col gap-5" aria-label="링크 목록">
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
