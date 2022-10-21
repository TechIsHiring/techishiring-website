interface Link {
  url: string;
  activeLink?: boolean;
  externalLink? : boolean;
}

interface NavLink extends Link {
  text: string;
};