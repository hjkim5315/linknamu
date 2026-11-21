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
  name: "김종로",
  bio: "세계 최강 바이브 코더",
  avatar: "/avatar.svg",
};

// TODO: 더미 링크입니다. 실제 주소로 교체하세요.
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/example" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/example" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
