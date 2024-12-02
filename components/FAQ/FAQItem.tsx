// FAQItem.tsx
import { useState, useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  // isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  // isOpen,
  // onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-[--dark-blue] bg-opacity-20 rounded-xl p-4 mb-4 cursor-pointer transition-all"
      whileHover={{ scale: 1.02 }}
    >
      {/* Question */}
      <div className="flex items-center justify-between">
        <span className="RobotoText font-bold text-lg text-white w-[95%]">
          {question}
        </span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          } text-white`}
        />
      </div>

      {/* Answer with sliding and fade-in effect */}
      <motion.div
        ref={contentRef}
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={{
          maxHeight: isOpen ? contentHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          maxHeight: { duration: 0.3 },
          opacity: { duration: 0.2 },
        }}
        className="overflow-hidden"
      >
        <div className="pt-2 RobotoText text-gray-200 text-sm">{answer}</div>
      </motion.div>
    </motion.div>
  );
};

export default FAQItem;
