type ProfileType = {
  name: string;
  title: string;
  content: string[];
};

type ConfigDataType = {
  profile: ProfileType;
  skill: SkillType[];
  language: SkillType[];
  workExperience: ExperienceType[];
  education: ExperienceType[];
};

export const configData: ConfigDataType = {
  profile: {
    name: "Chungwei Weng (Olaf)",
    title: "Front-End Developer",
    content: [
      `Seasoned software developer with 3+ years of experience as frontend developer.`,
      `Have enthusiasm and curiosity in modern technologies. Passionate about
      web development, fond of aesthetic and user-friendly interface. An
      insatiable learner, team player and highly disciplined developer with
      responsibility and positive working attitude.`,
    ],
  },
  skill: [
    {
      id: "reactjs",
      label: "React.js",
      level: 5,
      iconId: "reactjs",
    },
    {
      id: "vuejs",
      label: "Vue.js",
      level: 5,
      iconId: "vuejs",
    },
    {
      id: "nextjs",
      label: "Next.js",
      level: 4,
      iconId: "nextjs2",
    },
    {
      id: "js",
      label: "JavaScript",
      level: 5,
      iconId: "js",
    },
    {
      id: "typescript",
      label: "TypeScript",
      level: 4,
      iconId: "typescript",
    },
    {
      id: "nodejs",
      label: "Node.js",
      level: 3,
      iconId: "nodejs",
    },
    {
      id: "redux",
      label: "Redux",
      level: 5,
      iconId: "redux",
    },
    {
      id: "pinia",
      label: "Pinia",
      level: 5,
      iconId: "pinia",
    },
    {
      id: "vitejs",
      label: "Vite.js",
      level: 4,
      iconId: "vitejs",
    },
    {
      id: "webpack",
      label: "Webpack",
      level: 3,
      iconId: "webpack",
    },
    {
      id: "npm",
      label: "npm",
      level: 4,
      iconId: "npm",
    },
    {
      id: "yarn",
      label: "yarn",
      level: 4,
      iconId: "",
      iconText: "Yarn",
    },
    {
      id: "pnpm",
      label: "pnpm",
      level: 4,
      iconId: "",
      iconText: "pnpm",
    },
    {
      id: "jest",
      label: "Jest",
      level: 3,
      iconId: "jest",
    },
    {
      id: "git",
      label: "Git",
      level: 5,
      iconId: "git",
    },
    {
      id: "html5",
      label: "HTML5",
      level: 4,
      iconId: "html5",
    },
    {
      id: "css3",
      label: "CSS3",
      level: 4,
      iconId: "css3",
    },
    {
      id: "tailwindcss",
      label: "TailwindCSS",
      level: 5,
      iconId: "tailwindcss",
    },
    {
      id: "sass",
      label: "Sass",
      level: 5,
      iconId: "sass",
    },
    {
      id: "cssmodules",
      label: "CSS Modules",
      level: 4,
      iconId: "",
      iconText: "CM",
    },
    {
      id: "rwd",
      label: "RWD",
      level: 4,
      iconId: "",
      iconText: "RWD",
    },
    {
      id: "docker",
      label: "Docker",
      level: 3,
      iconId: "docker",
    },
  ],
  language: [
    {
      id: "english",
      label: "English - TOEIC BLUE",
      level: 4,
      iconId: "",
      iconText: "EN",
    },
    {
      id: "japanese",
      label: "Japanese - JLPT N3",
      level: 3,
      iconId: "",
      iconText: "JP",
    },
    {
      id: "mandarin",
      label: "Mandarin - Native",
      level: 5,
      iconId: "",
      iconText: "ZH",
    },
    {
      id: "taiwanese",
      label: "Taiwanese - Native",
      level: 5,
      iconId: "",
      iconText: "TW",
    },
  ],
  workExperience: [
    {
      id: "efai",
      role: ["Software Developer"],
      place: "Ever Fortune.AI",
      duration: "Aug. 2022 ~ Now",
      description: `* Genetic testing analysis applications
      - Construct enterprise-side admin CMS and client-side website start from scratch with React.js.
      - Refactor released client-side website from Vue.js to Next.js for enhancing SEO performance.
      - Maintain partial analysis report PDF generator service with Python.`,
      devStack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Vite",
        "React Query",
        "Ant Design UI",
        "TailwindCSS",
        "GitLab CICD",
        "Python",
      ],
    },
    {
      id: "ohbot",
      role: ["Frontend Web Developer"],
      place: "Oh!Bot Sien Technology",
      duration: "Dec. 2021 ~ Jun. 2022",
      description: `* Social CRM SaaS applications
      - Improved B2B admin CMS platform.
      - Improved B2C reservation and member management services.
      - Maintained official website.`,
      devStack: [
        "Vue3",
        "Vue2",
        "Vite",
        "Naive UI",
        "TailwindCSS",
        "GitLab CI",
        "Jira",
      ],
    },
    {
      id: "miracle",
      role: ["Senior Frontend Developer", "Frontend Developer"],
      place: "Miracle Information Technology",
      duration: "Jul. 2019 ~ Dec. 2020",
      description: `* Member management applications
      - Developed and improved admin dashboard and client-side website with Vue.js.
      
      * A frontend project lead
      - Lead 2 frontend members.
      - Coordinated developing schedule, reviewed code and assisted in deploying application services.`,
      devStack: ["Vue2", "Webpack", "Element UI", "SCSS", "GitLab CI", "Scrum"],
    },
    {
      id: "adlink",
      role: ["Senior FPGA Engineer", "FPGA Engineer"],
      place: "ADLINK Technology",
      duration: "Jul. 2015 ~ Oct. 2018",
      description: `* Modular instrument products - frame grabber | data acquisition | digitizer
      - Designed, implemented and verified FPGA centric solutions for modular instrument products.
      - RTL coding and simulation, FPGA implementation, verification and maintenance.
      - Designed custom interfaces, includes PCIe, DDR, IIC, SMBus and SPI.
      - Provided technical risks with mitigation and contingency strategies.
      - Introduced Git workflow into the team.`,
      devStack: [
        "Verilog HDL",
        "FPGA",
        "ModelSim",
        "Algorithm Development",
        "Shell Script",
        "Jira",
      ],
    },
  ],
  education: [
    {
      id: "tku",
      role: ["Master of Engineering, Electrical and Computer Engineering"],
      place: "Tamkang University (TKU), New Taipei",
      duration: "Feb. 2011 ~ Jan. 2014",
      description:
        "Thesis - Hardware/Software Co-Design of Pick and Place Operations for Path Planning",
      devStack: [
        "Path Planning Optimization",
        "Ant Colony Optimization (ACO) algorithm",
        "Motion Control Design",
      ],
    },
    {
      id: "uec",
      role: ["Short-term Exchange Study Program - JUSST"],
      place: "The University of Electro-Communications (UEC), Tokyo",
      duration: "Apr. 2012 ~ Mar. 2013",
      description:
        "Japanese University Studies in Science & Technology (JUSST) Program",
      link: [
        [
          "JUSST Program",
          "http://www.fedu.uec.ac.jp/en/future_students/jusst/",
        ],
      ],
    },
    {
      id: "tku",
      role: ["Bachelor of Engineering, Electrical and Computer Engineering"],
      place: "Tamkang University (TKU), New Taipei",
      duration: "Sep. 2006 ~ Jan. 2011",
      description: "",
    },
  ],
};
