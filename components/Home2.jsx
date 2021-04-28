import React from "react";
import { motion } from "framer-motion";
import useScroll from "../utils/useScroll";
import { scaleUp, scaleUpContainer } from "../utils/animations";

const Home2 = () => {
  const [element, control] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={scaleUpContainer}
      initial="hidden"
      animate={control}
      className="home-2"
    >
      <motion.h2
        variants={scaleUp}
        className="gradient-text"
      >
        Digitalizar tu negocio ya no es una opción
      </motion.h2>
      <motion.h3
        variants={scaleUp}
       
        className="gradient-text"
      >
        La digitalización y la automatización facilitan todos tus procesos.
      </motion.h3>
      <motion.h4
        variants={scaleUp}
      
        className="gradient-text"
        ref={element}
      >
        En ISAL queremos llevar tu negocio al mundo digital de forma eficiente.
      </motion.h4>
    </motion.div>
  );
};

export default Home2;
