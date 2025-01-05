import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import iconConfigs from "@/components/Speakers/IconConfigs";

const SocialIcon = ({
  prop,
  href,
}: {
  prop: string;
  href: string | undefined;
}) => {
  const iconConfig = iconConfigs.find((config) => config.prop === prop);

  if (!iconConfig) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition duration-300 ease-in-out hover:text-white ${iconConfig.classes}`}
    >
      <iconConfig.IconComponent className="w-5 h-5" prop={iconConfig.prop} />
    </a>
  );
};

export default SocialIcon;
