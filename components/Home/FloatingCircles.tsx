import { motion } from "framer-motion";

const circleData = [
  { text: "10,000+", subText: "attendees", size: "180px" },
  { text: "23", subText: "years", size: "160px" },
  { text: "290+", subText: "sponsors", size: "140px" },
  { text: "230+", subText: "speakers", size: "140px" },
];

const FloatingCircles = () => {
  const bobbingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  const positions = [
    { top: "-7.5%", left: "12.5%" }, // Upper-left, closer inward
    { top: "-12%", right: "15%" }, // Upper-right, closer inward
    { bottom: "-10%", left: "10%" }, // Bottom-left, further outward
    { bottom: "-8%", right: "12%" }, // Bottom-right, further outward
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 hidden [@media(min-width:1200px)]:block">
        {circleData.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute flex flex-col items-center justify-center rounded-full shadow-md"
          style={{
            width: circle.size,
            height: circle.size,
            background: "white", 
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)", 
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
