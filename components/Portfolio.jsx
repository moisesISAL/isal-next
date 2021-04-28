import React from "react";
import { portfolioData } from "../utils/portfolioData";
import { motion } from "framer-motion";
import useScroll from "../utils/useScroll";
import { servicesContainer, appearFromRight } from "../utils/animations";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Portfolio = () => {
  const [element, control] = useScroll();
  return (
    <motion.div
      ref={element}
      animate={control}
      variants={servicesContainer}
      initial="hidden"
      className="portafolio"
    >
      <h2 id="Portafolio" className="pt-5 gradient-text">
        Nuestro Portafolio
      </h2>
      {portfolioData.map((section) => (
        <div key={section.section} className="pf-section">
          <h3>{section.section}</h3>
          <motion.div
            variants={appearFromRight}
          
            className="pf-section-items "
          >
            {section.data.map((item) => (
              <div
                key={item.title}
                onClick={() => window.open(item.link, "_blank")}
                className="pf-section-item gm-sec"
              >
                <div className="pf-section-item-img">
                  <LazyLoadImage effect='opacity' src={item.img} alt={item.description}></LazyLoadImage>
                </div>
                <h4>{item.title}</h4>
                <p className="pf-section-item-desc">{item.description}</p>
                <p className="pf-section-item-tech">
                  Tecnologías: {item.technologies}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Portfolio;
