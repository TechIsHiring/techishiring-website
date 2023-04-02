// Base Project Types

interface Link {
  activeLink?: boolean;
  externalLink?: boolean;
  externalLinkAlt?: string;
}

interface NavLink extends Link {
  url: string;
  text: string;
  button?: boolean;
  footer?: boolean;
}

// API Return Types

/* 

  Example:

  readonly interface Countries {
    name: string;
    topLeveDomain: string[];
    alpha2Code: string;
    ...etc
  }

*/
