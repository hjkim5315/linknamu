import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-gradient-to-br from-white/90 to-orange-200/60 p-1.5 shadow-[0_12px_32px_rgba(200,120,70,0.28),0_2px_6px_rgba(200,120,70,0.18)] dark:from-white/20 dark:to-orange-300/10 dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        <Image
          src={profile.avatar}
          alt={`${profile.name} 프로필 사진`}
          width={132}
          height={132}
          priority
          className="h-[132px] w-[132px] rounded-full border-[3px] border-white/80 object-cover object-[50%_15%] shadow-inner dark:border-white/20"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 max-w-[18rem] text-[15px] leading-relaxed text-[var(--muted)]">
        {profile.bio}
      </p>
    </header>
  );
}
