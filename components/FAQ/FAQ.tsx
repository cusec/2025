import { useState } from "react";

import FAQItem from "./FAQItem";
import FAQData from "./FAQData";
import { useNav } from "../Navbar/NavContext";

const FAQ = () => {
  const { isOpen } = useNav();

  // State to keep track of the open accordion
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      id="faq"
      className={`flex flex-col items-center w-full py-8 px-4 transition-opacity ease-in-out duration-700 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* FAQ Container */}
      <div className="rounded-xl p-6 w-full max-w-3xl ">
        <h2 className="text-5xl md:text-7xl font-bold purpleText text-center mb-6">
          FAQ
        </h2>

        {/* FAQ Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQData.map((faq, index) => (
            <div key={index} className="relative">
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                // isOpen={openIndex === index}
                onToggle={() => handleToggleAccordion(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
