// Base Project Types

interface Link {
  url: string;
  activeLink?: boolean;
  externalLink?: boolean;
  externalLinkAlt?: string;
}

interface NavLink extends Link {
  text: string;
}

// API Return Types

// Revue

interface Issues {
  id: number;
  title: string;
  description: string;
  url: string;
  sent_at: string;
}
