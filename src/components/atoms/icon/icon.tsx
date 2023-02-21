import { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
  iconAlt: string;
  size?: number;
}

const Icon = ({ Icon, iconAlt, size = 24 }: IconProps) => {
  return (
    <Icon size={size} title={iconAlt} />
  );
};

export default Icon;
