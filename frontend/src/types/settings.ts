export interface SocialData {
  url: string;
  hoverColor?: string;
}

export interface PaperLink {
  text: string;
  url: string;
  icon: string;
}

export interface Paper {
  title: string;
  authors: string;
  venue: string;
  links: PaperLink[];
}

export interface Settings {
  social: {
    [key: string]: SocialData;
  };
  papers: Paper[];
}
