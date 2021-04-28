import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { appearFromRight } from "../utils/animations";
import { useForm } from "react-hook-form";
import { GoogleSpreadsheet } from "google-spreadsheet";
import useScrollDisplay from "../utils/useScrollDisplay";

const CustomACForm = (props) => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
  const SHEET_ID = process.env.SHEET_ID;
  const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, "\n");
  const [element, display] = useScrollDisplay();

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const onSubmit = (data) => {
    const newRow = { nombre: data.fullname, correo: data.email };
    appendSpreadsheet(newRow);
    setSent(true);
  };

  const [closed, setClosed] = useState(false);
  const [sent, setSent] = useState(false);
  const { initialSeconds = 0 } = props;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [renderTimes, setRenderTimes] = useState(0);
  useEffect(() => {
    if (renderTimes > 0) {
      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init("335747770610614");
          ReactPixel.track("ViewContent", {
            content_type: `alert`,
            contents: `Seccion de servicios`,
          });
        });
    }
  }, [renderTimes]);

  function closeForm(event) {
    event.preventDefault();
    setClosed(true);
  }
  function closeFormHref(event) {
    event.preventDefault();
    setClosed(true);
    document
      .getElementById("asesoria-gratuita")
      .scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div ref={element}>
      {closed === false && display ? (
        <motion.form
          onAnimationComplete={() => {
            setRenderTimes(renderTimes + 1);
          }}
          variants={appearFromRight}
          initial="hidden"
          animate="show"
          id="form_AG"
          onSubmit={handleSubmit(onSubmit)}
          className={`gm-sec form form_7 _inline-form  _dark`}
        >
          <button
            aria-label="Close Form Button"
            onClick={(event) => closeForm(event)}
            className="form-close-btn"
          >
            X
          </button>
          {sent === false ? (
            <div className="form-content">
              <div className="form_element _x84952078 _full_width _clear">
                <div className="pt-1 gradient-text form-title">
                  Agenda tu asesoría digital GRATIS.
                </div>
              </div>
              <div className="form_element _x41611525 _full_width _clear">
                <div className="_html-code">
                  <p className="form-description">
                    Al terminar la reunión tendrás el conocimiento y las
                    herramientas necesarias para impulsar tu negocio. <br></br>{" "}
                    ¡Lo mejor de todo es que son herramientas gratuitas y
                    fáciles de usar!
                  </p>
                </div>
              </div>
              <div className="form_element form_element-flex _x55544605 _full_width ">
                <label className="form-label">Nombre:</label>
                <div className="_field-wrapper">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Escriba su nombre"
                    className="gm-sec"
                    ref={register}
                    required
                  />
                </div>
              </div>
              <div className="form_element form_element-flex _x10961460 _full_width ">
                <label className="form-label">E-mail:</label>
                <div className="_field-wrapper">
                  <input
                    type="text"
                    name="email"
                    placeholder="Escriba su correo electrónico"
                    ref={register({
                      required: "Ingresa tu email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                        message: "Ingresa una dirección email valida",
                      },
                    })}
                    required
                    className="gm"
                  />
                  {errors.email && (
                    <p className="form-error">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="_button-wrapper pt-1 pb-2 _full_width">
                <button
                  aria-label="Send Button"
                  id="form_AGsubmit"
                  className=" btn btn-alt"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
              <h3>¿Lo tuyo no es el correo?</h3>
              <p>¡Contactanos mediante Whatsapp!</p>
              <div className="_button-wrapper wa-btn-wrapper pt-1 pb-2 _full_width">
                <a
                  aria-label="Contact via Button"
                  className=" btn btn-wa"
                  href="http://wa.me/+5214432000584"
                  target="_blank"
                  rel="noopener"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="form-resp">
              <h2>¡Felicidades!</h2>
              <p>
                Estas a punto de impulsar tu negocio, solo te queda{" "}
                <b>
                  agendar una reunión en alguno de nuestros horarios
                  disponibles.
                </b>{" "}
                <br></br> Da clic en el botón de abajo para seleccionar uno de
                nuestros horarios disponibles.
              </p>

              <button
                className="btn btn-alt"
                onClick={(event) => closeFormHref(event)}
              >
                Agendar un horario
              </button>
            </div>
          )}
        </motion.form>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomACForm;
