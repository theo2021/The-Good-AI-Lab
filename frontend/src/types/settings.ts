export interface SocialData {
  url: string;
  hoverColor?: string;
}

export interface Settings {
  social: {
    [key: string]: SocialData;
  };
}
