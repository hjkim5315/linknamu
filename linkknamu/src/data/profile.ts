export interface LinkItem {
  id: string;
  title: string;
  url: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatar: string;
}

// TODO: 더미 데이터입니다. 실제 내용으로 교체하세요.
export const profile: Profile = {
  name: "김현정",
  bio: "풀스텍 개발자 | 요즘은 ai 개발에 관심이 많음",
  avatar: "/profile.png",
};

export const links: LinkItem[] = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/hjkim5315" },
  { id: "blog", title: "📝 블로그", url: "https://blog.naver.com/hjkim_9204" },
  { id: "email", title: "📧 이메일", url: "mailto:hjkim5315@gmail.com" },
];
