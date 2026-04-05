export interface IArt {
  id: number;
  name: string;
  img: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  art: "photoshop" | "procreate";
  /** Optional display year */
  year?: number;
  /** Optional short caption (separate from image alt text) */
  description?: string;
}

