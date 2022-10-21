import { IconType } from "react-icons";
import Link from "components/atoms/link/link";

interface IconProps {
  Icon: IconType;
  iconAlt: string;
  ref: any;
  size?: number;
  url?: string;
}

const Icon = ({ Icon, iconAlt, ref, url, size = 24 }: IconProps) => {
  return (
    <>
      { url &&
        <Link url={url} ref={ref} externalLink >
          <Icon size={size} title={iconAlt} />
        </Link>
      }
      { !url && <Icon size={size} title={iconAlt} /> }
    </>
  );
};

export default Icon;