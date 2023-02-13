// Base Project Types

interface Link {
  url: string;
  activeLink?: boolean;
  externalLink? : boolean;
}

interface NavLink extends Link {
  text: string;
};

// API Return Types

// Revue

readonly interface Issues {
  id: number;
  title: string;
  description: string;
  url: string;
  sent_at: string;
}
