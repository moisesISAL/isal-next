import React from "react";
import { motion } from "framer-motion";
import useScroll from "../utils/useScroll";
import { methodSteps, methodContainer } from "../utils/animations";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Method = () => {
  const [element, control] = useScroll();
  return (
    <motion.div
      ref={element}
      animate={control}
      variants={methodContainer}
      className="home-3 pt-5"
    >
      <div className="home-3-div">
        <div className="">
          <h2 className=" text-1 gradient-text">
            Nuestra metodología: El pensamiento 10X.
          </h2>
          <p>
            Todo lo que hacemos en ISAL está basado en el pensamiento 10X. Se
            trata de una metodología inventada por Google para encontrar
            soluciones a todo tipo de problemas. El enfoque es abordar un
            problema para en lugar de mejorarlo 10%, revolucionarlo 10 veces, es
            decir una mejora del 1000%
          </p>
          <div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614649099/isaldigital/icons/play_allvb8.svg"
              ></img>
              <p>1. Comienza desde el principio, replantea</p>
            </motion.div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614650625/isaldigital/icons/search_dyrsu0.svg"
              ></img>
              <p>2. Identifica el gran problema</p>
            </motion.div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614650625/isaldigital/icons/customer-service_nz5zme.svg"
              ></img>
              <p>3. Visualiza el suceso, imagina cómo funcionará tu solución</p>
            </motion.div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614650625/isaldigital/icons/people-network_rhbjvg.svg"
              ></img>
              <p>4. Colabora con personas. Obtén nuevos puntos de vista</p>
            </motion.div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614650625/isaldigital/icons/vr-glasses_v4rsh8.svg"
              ></img>
              <p>
                5. Descubre tecnologías, los grandes retos con frecuencia
                requieren de una tecnología nueva, encuéntrala.
              </p>
            </motion.div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614650625/isaldigital/icons/sword_dou2sl.svg"
              ></img>
              <p>
                6. Toma riesgos, no temas equivocarte, el ensayo y error
                terminarán por dar dividendos.
              </p>
            </motion.div>
          </div>

          <div className="pt-1 group-btns">
            <a href="#asesoria-gratuita" className="btn gm-sec">
              Asesoría gratuita
            </a>
            <a href="#Contacto" className="btn gm-sec">
              Contáctenos
            </a>
          </div>
        </div>
      </div>
      <div className="home-3-div">
        <div className="gm-sec gm-div">
        <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/c_scale,f_auto,h_920,q_auto:low/v1614548529/isaldigital/isal2021_home3_vl0qgg.png"
              width={1139}
              height={920}
              alt="Agencia de transformacion digital en Queretaro"
            />
       
        </div>
      </div>
    </motion.div>
  );
};

export default Method;
