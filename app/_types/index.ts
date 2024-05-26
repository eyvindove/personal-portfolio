export type NavbarItemType = {
  id: string;
  label: string;
};

export type SocialConfigType = {
  id: string;
  label: string;
  link: string;
  icon: React.ReactNode;
};

export type SkillType = {
  id: string;
  label: string;
  level: number;
  iconId: string;
  iconText?: string;
};

export type ExperienceType = {
  id: string;
  role: string[];
  place: string;
  duration: string;
  description: string;
  devStack?: string[];
  link?: [string, string][];
};
