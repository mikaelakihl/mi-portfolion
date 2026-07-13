export interface IProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface IProjectLink {
  label: string;
  url: string;
}

export interface IProject {
  id: number;
  /** Every project has a slug and its own /projects/:slug page. */
  slug: string;
  /** Featured projects get the larger card with inline description/tech on the list page; others show as a plain image+title thumbnail. */
  featured?: boolean;
  title: string;
  img?: IProjectImage;
  /** Extra gallery images for the detail page. Falls back to `img` when omitted. */
  images?: IProjectImage[];
  description: string[];
  /** Longer copy shown only on the detail page. Falls back to `description` when omitted. */
  longDescription?: string[];
  tech: string[];
  demo?: string;
  github?: string;
  links?: IProjectLink[];
  created_at: string;
}
