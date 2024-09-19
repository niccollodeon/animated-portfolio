import { motion } from "framer-motion";
import "./hero.scss"

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
};
const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-320%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      }
    },
};
const Hero = () => {
    return (
        <div className="hero">
          <div className="wrapper"> 
            <motion.div 
              className="textContainer" 
              variants={textVariants} 
              initial="initial" 
              animate="animate"
            >
              <motion.h2 variants={textVariants}>NICCOLLO DAYRIT</motion.h2>
              <motion.h1 variants={textVariants}>Software Engineer and Web Developer</motion.h1>
              <motion.p variants={textVariants}>Hi, I am Niccollo, I am a dedicated and passionate professional with a strong focus on delivering well-designed websites, projects, and applications. My commitment to excellence drives me to produce high-quality work that meets the unique needs of each company I collaborate with. I thrive in group settings, leveraging my teamwork skills to contribute effectively to collective goals. Always eager to learn and grow, I embrace opportunities for professional development to continually enhance my skills and stay at the forefront of industry advancements.</motion.p>
              <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>
                  <a href="#Portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                    See the Latest Works
                  </a>
                </motion.button>
                <motion.button variants={textVariants}>Download CV</motion.button>
              </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
          </div>
          <motion.div 
            className="slidingTextContainer" 
            variants={sliderVariants} 
            initial="initial" 
            animate="animate"
          >
            Computer Scienctist
          </motion.div>
          <div className="imageContainer">
            <img src="/hero1.png" alt="" />
          </div>
        </div>
    )
}

export default Hero