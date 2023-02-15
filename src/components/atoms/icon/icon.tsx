import { IconType } from "react-icons";
import Link from "components/atoms/link/link";

interface IconProps {
  Icon: IconType;
  iconAlt: string;
  size?: number;
  url?: string;
}

const Icon = ({ Icon, iconAlt, url, size = 24 }: IconProps) => {
  return (
    <>
      {url && (
        <Link url={url}>
          <a target="_blank" rel="noreferrer">
            <Icon size={size} title={iconAlt} />
          </a>
        </Link>
      )}
      {!url && <Icon size={size} title={iconAlt} />}
    </>
  );
};

export default Icon;
