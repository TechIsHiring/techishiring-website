import { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
  iconAlt: string;
  url?: string;
}

const Icon = ({ Icon, iconAlt, url }: IconProps) => {
  return (
    <>
      { url &&
        <a href={url} target="_blank">
          <Icon title={iconAlt} />
        </a>
      }
      { !url && <Icon title={iconAlt} /> }
    </>
  );
};

export default Icon;