export interface DetailsInterface {
  fName: string;
  lName: string;
  title: string;
  specialization: string;
  data: { text: string; type: string }[];
  summary: string;
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  skills: {
    type: string;
    skills: string[];
  }[];
  workExperience: {
    role: string;
    company: string;
    duration: string;
    projects: {
      name: string;
      period?: string;
      description: string;
      techStack?: string[];
    }[];
  }[];
}

const DETAILS = {
  fName: "Davinder",
  lName: "Singh",
  title: "Software Engineer",
  specialization: "React Native/JS",
  summary: `Senior React Native Developer with 8+ years of experience in mobile application development, including
6+ years specializing in React Native. Experience in building scalable, high-performance applications across
healthcare, e-commerce, oil & gas, and enterprise domains. Strong skills in TypeScript, Expo, Redux
Toolkit, Zustand, Firebase, React-Native-Web, and oﬄine-first architectures. Experienced in end-to-end
delivery and App Store / Play Store publishing.`,

  data: [
    { text: "+91 98034-28191", type: "phone" },
    { text: "singh.davinder0810@gmail.com", type: "email" },
    { text: "https://github.com/Davinder08/MyResume", type: "website" },
    {
      text: "# 8902/20, Gurpal Nagar, St. no. 11/2, Ludhiana, 141003",
      type: "address",
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "Panjab University, Chandigarh, India",
      year: "2011 - 2015",
    },
    {
      degree: "12th",
      institution: "Spring Dale Public School, Ludhiana",
      year: "2011",
    },
    {
      degree: "10th",
      institution: "M.G.M. Public School, Ludhiana",
      year: "2009",
    },
  ],
  skills: [
    {
      type: "Mobile & Frontend",
      skills: [
        "React Native",
        "React Native Web",
        "Expo",
        "ReactJS",
        "Android (Java)",
        "iOS",
      ],
    },
    { type: "Languages", skills: ["JavaScript (ES6+)", "TypeScript", "Java"] },
    { type: "Architecture", skills: ["MVC", "MVVM", "Redux Offline"] },
    {
      type: "Process",
      skills: ["Agile / Scrum", "JIRA", "Confluence", "CI/CD", "Code Review"],
    },
    {
      type: "State Management",
      skills: ["Redux", "Redux Toolkit", "Redux Saga", "Zustand", "ContextAPI"],
    },
    {
      type: "UI / Styling",
      skills: [
        "Tamagui",
        "Responsive UI",
        "Theming",
        "Localization",
        "Reusable Components",
      ],
    },
    {
      type: "APIs & Data",
      skills: [
        "REST APIs",
        "Axios",
        "TanStack Query",
        "Offline Sync",
        "Async Storage",
      ],
    },
    {
      type: "Integrations",
      skills: [
        "Google - Facebook Login",
        "RazorPay",
        "Deep Linking",
        "Zoom SDK",
        "Brothers Printer SDK",
      ],
    },
    {
      type: "Firebase & Analytics",
      skills: [
        "Firebase Crashlytics",
        "Push Notifications",
        "Analytics",
        "Notifee",
        "New Relic",
        "Adobe Analytics",
        "Tealium",
      ],
    },
    {
      type: "Tools & Platforms",
      skills: [
        "Firebase",
        "MapBox",
        "Tailwind CSS",
        "Tealium",
        "Push Notifications",
        "GitHub",
        "Bitbucket",
        "JIRA",
        "Confluence",
        "VS Code",
        "Android Studio",
        "Xcode",
        "AWS CodeCommit",
      ],
    },
  ],
  workExperience: [
    {
      role: "Software Engineer",
      company: "Tech Mahindra",
      duration: "Aug 2022 - Dec 2025",
      projects: [
        {
          name: "Care Team Navigator – Mayo Clinic",
          period: "Jan 2025 – Oct 2025",
          description: `A healthcare care-coordination application supporting patient and admin scheduling.
• Developed multi-level React Native UI flows for patient report analysis.
• Integrated Outlook email and RSVP functionality for scheduling meeting.
• Built reusable UI components using Expo, Tamagui, and TypeScript.
• Implemented analytics using Tealium and optimized data handling with Zustand, Axios, and
TanStack.
• Identified and resolved application issues to improve stability and usability.`,
          techStack: [
            "React Native",
            "ReactJS TypeScript",
            "Expo",
            "Tamagui",
            "Zustand",
            "Axios",
            "TanStack",
            "Tealium",
            "Luxon",
          ],
        },
        {
          name: "PSHP – Sharecare",
          period: "Jun 2024 – Jan 2025",
          description: `Medicaid healthcare management application for Peach State Health Plan.
• Implemented React-Native-Web modules, enabling a single codebase for mobile and web.
• Developed key features including Welcome screens for both platforms.
• Created multiple builds for different client configurations.
• Refactored codebase using MVVM architecture.
• Supported applications across iOS, Android, and Web.`,
          techStack: [
            "React Native",
            "React Native Web",
            "Redux Toolkit",
            "MapBox",
            "Deep Linking",
            "Push Notifications",
            "New Relic",
            "Adobe Analytics",
          ],
        },
        {
          name: "Blue Marble & XDS StoreFront (Jana)",
          period: "",
          description: `E-commerce applications for fashion and grocery platforms.
• Developed Home Screen, common Product Cards, and responsive layouts.
• Implemented theming, localization, and custom fonts.
• Collaborated with product teams on UI/UX improvements.
• Supported mobile and web platform using React Native.`,
          techStack: [
            "React Native",
            "React Native Web",
            "Redux Toolkit",
            "Bitbucket",
            "Theming",
            "Localization",
          ],
        },
        {
          name: "NEOM - Sindalah Booking & Payment, Microapp & Materials Catalogue",
          period: "",
          description: `• Developed home screen with multiple horizontal listings.
• Created reusable UI components.
• Integrated Firebase Crashlytics for monitoring
• Implemented login, banners, product listing, filtering, and wishlist.
• Designed separate UI experiences for tablet and mobile.
• Improved UI performance through reusable components.`,
          techStack: [],
        },
      ],
    },
    {
      role: "Senior Software Developer",
      company: "Bursys Infotech Pvt. Ltd",
      duration: "September 2020 – July 2022",
      projects: [
        {
          name: "Field Equip",
          description: `• Built asset and cost management mobile applications for the oil & gas industry.
• Implemented Bluetooth printer integration for invoice printing.
• Developed a reusable NPM package for invoice templates.
• Worked with Redux Saga, Firebase, Maps, and Location Services.`,
          techStack: [
            "JavaScript",
            "React-Native",
            "Offline Support with File System",
            "Meetings with Zoom Video",
            "Maps",
          ],
        },
      ],
    },
    {
      role: "Software Developer",
      company: "Safaltek Software Pvt. Ltd",
      duration: "June 2019 to July 2020",
      projects: [
        {
          name: "mAuditor & mVesting",
          description: `• Developed mobile applications for inspection and auditing.
• Implemented offline file system support.
• Integrated Zoom SDK for secure remote inspections.
• Improved UI consistency using reusable components.`,
          techStack: [
            "JavaScript",
            "React-Native",
            "Offline Support with File System",
            "Meetings with Zoom Video",
            "Maps",
          ],
        },
      ],
    },
    {
      role: "Android Developer",
      company: "Salentro Technologies Pvt. Ltd",
      duration: "September 2018 to May 2019",
      projects: [
        {
          name: "2Cents",
          description: `• Developed a social media application similar to Twitter.
• Integrated Facebook and Google authentication.
• Implemented tweets, polls, followers, and following features.
• Supported web team with ReactJS bug fixes.`,
          techStack: [
            "Java",
            "Android SDK",
            "Facebook SDK",
            "Google Sign-In",
            "ReactJS",
          ],
        },
      ],
    },
    {
      role: "Android Developer",
      company: "01 Synergy Pvt. Ltd",
      duration: "July 2016 to May 2018",
      projects: [
        {
          name: "RONet",
          description: `• Developed an election management application for Returning Officers.
• Implemented polling workflows for P-1, Polling Day, and P+1.
• Handled UI development, deployment, and maintenance.`,
          techStack: ["Java", "Android SDK", "SQLite", "REST APIs"],
        },
      ],
    },
  ],
};

export { DETAILS };
