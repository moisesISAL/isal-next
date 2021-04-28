import React from "react";
import { motion } from "framer-motion";
import useScroll from "../utils/useScroll";
import {
  titleAnim,
  servicesContainer,
  appearFromRight,
} from "../utils/animations";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Services = () => {
  const [element, control] = useScroll();
  return (
    <motion.div
      ref={element}
      animate={control}
      variants={servicesContainer}
      id="Servicios"
      className="home-4 pt-5"
    >
      <motion.h2
        variants={titleAnim}
        
        className="gradient-text"
      >
        Nuestros servicios
      </motion.h2>
      <motion.div
      
        variants={appearFromRight}
        className="services-container "
      >
        
        <div className="service-container gm-sec">
          <div className="service-img pt-2">
            <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/f_auto,q_auto:low/v1614708544/isaldigital/isal2021_home_zjardz.png"
              width="1280"
              height="620"
              alt="Diseño y desarrollo web creativo y profesional en Quéretaro"
            ></LazyLoadImage>
          </div>

          <h3 className="">Diseño y desarrollo web</h3>
          <p>
            Esta es nuestra especialidad. En ISAL diseñamos y desarrollamos
            distintos productos web. Podemos crear Landing pages, Páginas Web,
            Aplicaciones Web, PWA y Sistemas Web
          </p>
          <div className="pt-1 service-btns">
            <a href="#asesoria-gratuita" className="btn gm-sec">
              Asesoría gratuita
            </a>
            <a href="#Contacto" className="btn gm-sec">
              Contáctenos
            </a>
          </div>
        </div>
        <div className="service-container gm-sec">
          <div className="service-img pt-2">
            <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/f_auto,q_auto:low/v1614711833/isaldigital/isal2021_home4_l1velw.png"
              width="1280"
              height="620"
              alt="Diseño y desarrollo de aplicaciones moviles en Quéretaro"
            ></LazyLoadImage>
          </div>

          <h3 className="">Diseño y desarrollo Móvil</h3>
          <p>
            Las aplicaciones móviles pueden ayudarte a optimizar tus procesos o
            pueden ser una idea de negocio por si misma. En ISAL podemos crear
            la app que siempre has soñado.
          </p>
          <div className="pt-1 service-btns">
            <a href="#asesoria-gratuita" className="btn gm-sec">
              Asesoría gratuita
            </a>
            <a href="#Contacto" className="btn gm-sec">
              Contáctenos
            </a>
          </div>
        </div>
        <div className="service-container gm-sec">
          <div className="service-img pt-2">
            <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/c_scale,f_auto,q_auto:low,w_1280/v1614711605/isaldigital/isal2021_home6_pllgrp.png"
              width="1280"
              height="620"
              alt="Agencia de Transformación digital en Querétaro"
            ></LazyLoadImage>
          </div>

          <h3 className="">Transformación Digital</h3>
          <p>
            El objetivo de la transformación digital es ayudarte a ahorrar
            costos, generar más clientes y hacer más fáciles tus procesos. En
            ISAL queremos ayudarte a transformar tu negocio de forma eficiente.
          </p>
          <div className="pt-1 service-btns">
            <a href="#asesoria-gratuita" className="btn gm-sec">
              Asesoría gratuita
            </a>
            <a href="#Contacto" className="btn gm-sec">
              Contáctenos
            </a>
          </div>
        </div>
        <div className="service-container gm-sec">
          <div className="service-img pt-2">
            <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/c_scale,f_auto,q_auto:low,w_1280/v1614711604/isaldigital/isal2021_home5_nzqwia.png"
              width="1280"
              height="620"
              alt="Automatización de procesos empresariales y de negocios en Querétaro"
            ></LazyLoadImage>
          </div>

          <h3 className="">Automatización de procesos</h3>
          <p>
            La mayoría de los procesos aburridos de tu negocio se pueden
            automatizar para que inviertas tu tiempo en los procesos que
            realmente necesitan de tu supervisión.
          </p>
          <div className="pt-1 service-btns">
            <a href="#asesoria-gratuita" className="btn gm-sec">
              Asesoría gratuita
            </a>
            <a href="#Contacto" className="btn gm-sec">
              Contáctenos
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
