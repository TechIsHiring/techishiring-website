interface DefaultTextProps {
  className?: string;
  children: React.ReactNode;
}

const DefaultText = ({className, children}: DefaultTextProps) => {
  return <p className={className}>{children}</p>;
};

export default DefaultText;
