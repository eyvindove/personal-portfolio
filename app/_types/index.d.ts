declare global {
  type NavbarItemType = {
    id: string;
    label: string;
  };

  type SocialConfigType = {
    id: string;
    label: string;
    link: string;
    icon: React.ReactNode;
  };

  type SkillType = {
    id: string;
    label: string;
    level: number;
    iconId: string;
    iconText?: string;
  };

  type ExperienceType = {
    id: string;
    role: string[];
    place: string;
    duration: string;
    description: string;
    devStack?: string[];
    link?: [string, string][];
  };

  type PlaygroundType = {
    id: string;
    title: string;
    description: string;
    image: string;
    demo: string;
    github: string;
  };
}

export {};
