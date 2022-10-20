import { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
  iconAlt: string;
  size?: number;
  url?: string;
}

const Icon = ({ Icon, iconAlt, url, size = 24 }: IconProps) => {
  return (
    <>
      { url &&
        <a href={url} target="_blank">
          <Icon size={size} title={iconAlt} />
        </a>
      }
      { !url && <Icon size={size} title={iconAlt} /> }
    </>
  );
};

export default Icon;