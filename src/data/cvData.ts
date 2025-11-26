import type { CVData } from "../types/cv";

export const cvData: CVData = {
  education: [
    {
      id: "0",
      startDate: "Oktober 2025",
      endDate: "December 2025",
      organization: "Visma Draftit",
      location: "Malmö",
      description:
        "Developing an interactive data visualization dashboard using React and TypeScript. Responsible for component structure, state management, and UI design, working independently while collaborating with the team to ensure quality in a production environment.",
    },
    {
      id: "1",
      startDate: "Oktober 2024",
      endDate: "May 2026 (expected)",
      organization: "Mediainstitutet",
      location: "Remote",
      description:
        "Studying Front End Development, HTML, CSS, JavaScript, Frameworks, Graphic tools, UX, API development",
    },
  ],
  workExperience: [
    {
      id: "0",
      startDate: "March 2022",
      endDate: "present",
      company: "Visma Draftit",
      location: "Malmö",
      description:
        "Handling incoming calls and emails, helping customers with issues, and completing varied administrative tasks. Developed strong communication, problem-solving, and customer-focused service skills.",
    },
    {
      id: "1",
      startDate: "March 2021",
      endDate: "February 2022",
      company: "Betssongroup",
      location: "St julians, Malta",
      description:
        "Assisted customers through email and chat in a fast-paced iGaming environment. Improved written communication, efficiency, and gained insight into the iGaming industry.",
      experienceGained: ["Soft skills", "Igaming knowledge"],
    },
    {
      id: "2",
      startDate: "November 2020",
      endDate: "March 2021",
      company: "Assistans i balans",
      location: "Stockholm",
      description:
        "Provided daily support to an 11-year-old girl with a disability. Built skills in non-verbal communication, patience, and creative problem-solving.",
      experienceGained: ["Creativity", "Communicating with body language"],
    },
    {
      id: "3",
      startDate: "February 2020",
      endDate: "August 2020",
      company: "Mr Green/William hill",
      location: "Sliema, Malta",
      description:
        "Handled customer inquiries across multiple channels. Strengthened multitasking abilities, language skills, and service handling under pressure.",
      experienceGained: ["Patience", "Multitask", "Language"],
    },
    {
      id: "4",
      startDate: "April 2018",
      endDate: "November 2019",
      company: "Thales",
      location: "Stockholm",
      description:
        "Packaged and shipped secure ID documents with high accuracy. Gained independence, reliability, and attention to detail.",
      experienceGained: ["Responsibility", "Independency"],
    },
  ],
};
