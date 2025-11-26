export interface EducationEntry {
  id: string;
  startDate: string;
  endDate: string;
  organization: string;
  location: string;
  description: string;
}

export interface WorkExperienceEntry {
  id: string;
  startDate: string;
  endDate: string;
  company: string;
  location: string;
  description: string;
  experienceGained?: string[];
}

export interface CVData {
  education: EducationEntry[];
  workExperience: WorkExperienceEntry[];
}

