const workExperience: ExperienceType[] = [
  {
    id: 'nunox',
    role: ['Frontend Web Developer'],
    place: 'NunoX',
    duration: 'Mar. 2024 ~ Present',
    description: `* AI-powered textile digital twin SaaS platform
    - Migrate project from Vue2 to Vue3
    - Develop cropping & texture overlaying features of digital materials
    - Maintain dynamic 2D & 3D visuals editing & generating features`,
    devStack: [
      'Vue3',
      'Vue2',
      'Vite',
      'Vuetify',
      'Canvas',
      'Three.js',
      'GitLab CICD',
    ],
  },
  {
    id: 'efai',
    role: ['Software Developer'],
    place: 'Ever Fortune.AI',
    duration: 'Aug. 2022 ~ Mar. 2024',
    description: `* Genetic testing analysis applications
    - Constructed enterprise-side admin CMS and client-side website start from scratch with React.js.
    - Refactored released client-side website from Vue.js to Next.js for enhancing SEO performance.
    - Established CICD flow for automatic deployment.
    - Maintained partial analysis report PDF generator service with Python.`,
    devStack: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Vite',
      'React Query',
      'Ant Design UI',
      'TailwindCSS',
      'GitLab CICD',
      'Python',
    ],
  },
  {
    id: 'ohbot',
    role: ['Frontend Web Developer'],
    place: 'Oh!Bot Sien Technology',
    duration: 'Dec. 2021 ~ Jun. 2022',
    description: `* Social CRM SaaS applications
    - Improved B2B admin CMS platform.
    - Improved B2C reservation and member management services.
    - Maintained official website.`,
    devStack: [
      'Vue3',
      'Vue2',
      'Vite',
      'Naive UI',
      'TailwindCSS',
      'GitLab CI',
      'Jira',
    ],
  },
  {
    id: 'miracle',
    role: ['Senior Frontend Developer', 'Frontend Developer'],
    place: 'Miracle Information Technology',
    duration: 'Jul. 2019 ~ Dec. 2020',
    description: `* Member management applications
    - Developed and improved admin dashboard and client-side website with Vue.js.
    
    * A frontend project lead
    - Lead 2 frontend members.
    - Coordinated developing schedule, reviewed code and assisted in deploying application services.`,
    devStack: ['Vue2', 'Webpack', 'Element UI', 'SCSS', 'GitLab CI', 'Scrum'],
  },
  {
    id: 'adlink',
    role: ['Senior FPGA Engineer', 'FPGA Engineer'],
    place: 'ADLINK Technology',
    duration: 'Jul. 2015 ~ Oct. 2018',
    description: `* Modular instrument products - frame grabber | data acquisition | digitizer
    - Designed, implemented and verified FPGA centric solutions for modular instrument products.
    - RTL coding and simulation, FPGA implementation, verification and maintenance.
    - Designed custom interfaces, includes PCIe, DDR, IIC, SMBus and SPI.
    - Provided technical risks with mitigation and contingency strategies.
    - Introduced Git workflow into the team.`,
    devStack: [
      'Verilog HDL',
      'FPGA',
      'ModelSim',
      'Algorithm Development',
      'Shell Script',
      'Jira',
    ],
  },
];

export default workExperience;
