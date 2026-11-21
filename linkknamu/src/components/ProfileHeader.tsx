import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.avatar}
        alt={`${profile.name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="h-40 w-40rounded-full border-2 border-neutral-300 object-cover dark:border-neutral-600"
      />
      <h1 className="mt-4 text-xl font-bold">{profile.name}</h1>
      <p className="mt-1 text-neutral-600 dark:text-neutral-400">{profile.bio}</p>
    </header>
  );
}
