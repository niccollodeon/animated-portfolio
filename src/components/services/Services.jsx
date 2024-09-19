import "./services.scss";
import { animate, motion } from "framer-motion";

const circleVariants = {
  initial: { strokeDashoffset: 251.2 },
  animate: (custom) => ({
    strokeDashoffset: 251.2 - (251.2 * custom) / 100,
    transition: { duration: 1.5 }
  })
};

const variants = {
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const skills = [
    { language: "JavaScript", level: 67 },
    { language: "Python", level: 75 },
    { language: "Java", level: 50 },
    { language: "HTML", level: 70 },
    { language: "React", level: 60 }
  ];

  return (
    <motion.div className="services" initial="initial" whileInView="animate" variants={variants}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your company grow 
          <br /> and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/thumb.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ textShadow: "0px 0px 8px rgba(255,255,255,1)" }}>Creative Solutions</motion.b> For
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ textShadow: "0px 0px 8px rgba(255,255,255,1)" }}>Engaging Websites</motion.b> And <motion.b whileHover={{ textShadow: "0px 0px 8px rgba(255,255,255,1)" }}>Flawless Apps</motion.b>.
          </h1>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        {skills.map((skill, index) => (
          <motion.div className="box" key={index} whileHover={{ background: "orange", color: "black" }}>
            <h2>{skill.language}</h2>

            {/* Circular Progress Bar */}
            <div className="circular-progress">
              <svg className="progress-ring" width="100" height="100">
                <circle
                  className="progress-ring__circle"
                  stroke="lightgray"
                  strokeWidth="10"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <motion.circle
                  className="progress-ring__circle"
                  stroke="violet"
                  strokeWidth="10"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                  strokeDasharray="251.2"
                  strokeLinecap={"round"}
                  custom={skill.level}
                  variants={circleVariants}
                  initial="initial"
                  whileInView="animate"
                />
              </svg>
              <div className="skill-percent">{skill.level}%</div>
            </div>

            <p>{skill.language} proficiency level: {skill.level}%</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
