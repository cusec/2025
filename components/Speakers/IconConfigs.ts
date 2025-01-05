import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { FiGlobe, FiInstagram } from 'react-icons/fi';
import IconConfig from './IconConfig';

const iconConfigs: IconConfig[] = [
  {
    prop: "twitter",
    classes: "border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2]",
    IconComponent: AiFillTwitterCircle,
  },
  {
    prop: "linkedin",
    classes: "border-[#05a7ff] text-[#05a7ff] hover:bg-[#05a7ff]",
    IconComponent: AiFillLinkedin,
  },
  {
    prop: "github",
    classes: "border-gray-500 text-gray-500 hover:bg-gray-500",
    IconComponent: AiFillGithub,
  },
  {
    prop: "website",
    classes: "border-green-500 text-green-500 hover:bg-green-500",
    IconComponent: FiGlobe,
  },
  {
    prop: "instagram",
    classes: "border-[#c13584] text-[#c13584] hover:bg-[#c13584]",
    IconComponent: FiInstagram,
  },
];

export default iconConfigs;