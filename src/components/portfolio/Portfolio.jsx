import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id:1,
        title:"Laya - Legal Aid at Your Access",
        img:"/laayaa.jpg",
        desc:"An AI chatbot designed to address all your inquiries and needs related to Philippine laws. This advanced virtual assistant provides comprehensive and accurate information, helping you navigate legal questions, understand regulations, and stay informed about legal matters specific to the Philippines.",
    },
    {
        id:2,
        title:"C++ Anime Must Watch List",
        img:"https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"An AI chatbot designed to address all your inquiries and needs related to Philippine laws. This advanced virtual assistant provides comprehensive and accurate information, helping you navigate legal questions, understand regulations, and stay informed about legal matters specific to the Philippines.",
    },
    {
        id:3,
        title:"Medical Supplies Database",
        img:"https://images.pexels.com/photos/4483340/pexels-photo-4483340.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"An AI chatbot designed to address all your inquiries and needs related to Philippine laws. This advanced virtual assistant provides comprehensive and accurate information, helping you navigate legal questions, understand regulations, and stay informed about legal matters specific to the Philippines.",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
      });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

    return (    
      <section ref={ref}>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer">
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
     </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });

    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
           <Single item={item} key={item.id} />
        ))}
      </div>
    );
};

export default Portfolio;
