import { motion } from "framer-motion";

const circleData = [
  { text: "10,000+", subText: "attendees", size: "180px" },
  { text: "23", subText: "years", size: "160px" },
  { text: "290+", subText: "sponsors", size: "140px" },
  { text: "230+", subText: "speakers", size: "140px" },
];

const FloatingCircles = () => {
  const bobbingAnimation = {
    transform: ["translateY(0px)", "translateY(-20px)", "translateY(0px)"], 
    transition: {
      duration: 4.0,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  const positions = [
    { top: "-5%", left: "12.5%" }, // Upper-left
    { top: "-12%", right: "15%" }, // Upper-right
    { bottom: "-10%", left: "10%" }, // Bottom-left
    { bottom: "-8%", right: "12%" }, // Bottom-right
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 hidden [@media(min-width:1200px)]:block">
      {circleData.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute flex flex-col items-center justify-center rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            background: "white",
            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.15)", 
            willChange: "transform", 
            ...positions[index],
          }}
          animate={bobbingAnimation}
        >
          <p
            className="BScreensText textGradient font-bold leading-none"
            style={{
              fontSize: "57px",
              fontWeight: 700,
              color: "var(--purple)",
              lineHeight: "1.1",
            }}
          >
            {circle.text}
          </p>
          <p
            className="BScreensText font-bold"
            style={{
              fontSize: "36px",
              color: "var(--purple)",
              marginTop: "-10px",
            }}
          >
            {circle.subText}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCircles;
