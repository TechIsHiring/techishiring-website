type Level = Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

interface HeaderTextProps {
  level: Level;
  className?: string;
  children: React.ReactNode;
}

const HeaderText = ({level: HeadingLevel, className, children}: HeaderTextProps) => {
  return (
    <HeadingLevel className={className}>
      {children}
    </HeadingLevel>
  );
};

export default HeaderText;
