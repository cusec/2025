// dependencies
import { motion } from "framer-motion";

interface EmailLinkProps {
  href: string;
  text: string;
}

const EmailLink: React.FC<EmailLinkProps> = ({ href, text }) => {
  return (
    <motion.button
      className="w-[250px] md:w-[350px] h-[35px] md:h-[45px] mx-auto bg-[--purple] flex justify-center items-center rounded-xl"
      whileHover={{ backgroundColor: "#5250d4", scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <a
        href={href}
        className="text-white font-roboto-condensed font-extrabold tracking-wider text-xl"
      >
        {text}
      </a>
    </motion.button>
  );
};

export default EmailLink;