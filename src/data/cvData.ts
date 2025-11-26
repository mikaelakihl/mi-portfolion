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
        "Customer success associate, handling incoming calls and emails. Varying administrative office-tasks.",
    },
    {
      id: "1",
      startDate: "March 2021",
      endDate: "February 2022",
      company: "Betssongroup",
      location: "St julians, Malta",
      description: "Customer support with email and live-chat.",
      experienceGained: ["Soft skills", "Igaming knowledge"],
    },
    {
      id: "2",
      startDate: "November 2020",
      endDate: "March 2021",
      company: "Assistans i balans",
      location: "Stockholm",
      description: "Assists 11-year old girl with disability",
      experienceGained: ["Creativity", "Communicating with body language"],
    },
    {
      id: "3",
      startDate: "February 2020",
      endDate: "August 2020",
      company: "Mr Green/William hill",
      location: "Sliema, Malta",
      description: "Customer support with calls, mails and live chat",
      experienceGained: ["Patience", "Multitask", "Language"],
    },
    {
      id: "4",
      startDate: "April 2018",
      endDate: "November 2019",
      company: "Thales",
      location: "Älvsjö",
      description:
        "Review and packaging, ship ID documents, secure handling of personal documents, machine handling",
      experienceGained: ["Responsibility", "Independency"],
    },
  ],
};
