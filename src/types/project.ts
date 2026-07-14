export interface IProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional label shown under the image in the detail-page carousel, e.g. "Before" / "After". */
  caption?: string;
}

export interface IProjectLink {
  label: string;
  url: string;
}

export interface IProjectSection {
  /** Translation key for the section heading. */
  heading: string;
  /** Translation key for a paragraph body. */
  body?: string;
  /** Translation keys for a bullet list, rendered alongside or instead of `body`. */
  items?: string[];
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
  /** Longer copy shown only on the detail page. Falls back to `description` when omitted. Ignored when `sections` is set. */
  longDescription?: string[];
  /** Structured detail-page content (heading + paragraph and/or bullet list per section). Takes priority over `longDescription`. */
  sections?: IProjectSection[];
  tech: string[];
  demo?: string;
  github?: string;
  links?: IProjectLink[];
  created_at: string;
}
