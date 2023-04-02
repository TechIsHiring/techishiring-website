// Base Project Types

interface Link {
  url: string;
  activeLink?: boolean;
  externalLink?: boolean;
  externalLinkAlt?: string;
}

interface NavLink extends Link {
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
