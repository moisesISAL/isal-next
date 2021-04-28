import Head from "next/head";
import Navbar from "./Navbar";

//Tambien se conoce como layout
const Container = (props) => (
  <div>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,600;0,700;0,900;1,400&display=swap"
        rel="stylesheet"
      ></link>
      <meta
        name="description"
        content="Agencia de transformacion digital y desarrollo de software creativo en Queretaro. Automatiza procesos y digitaliza tu negocio para impulsar tu empresa"
      />
      <meta
        property="og:title"
        content="ISAL Digital. Automatizamos y digitalizamos los procesos aburridos de tu negocio."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dcemx7jg0/image/upload/v1618337277/isaldigital/fb_cover_1.0_tuoswp.jpg"
      />
      <meta property="og:url" content="https://isaldigital.com" />
      <meta
        property="og:description"
        content="Agencia de transformacion digital y desarrollo de software creativo en Queretaro. Automatiza procesos y digitaliza tu negocio para impulsar tu empresa"
      />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:site_name" content="ISAL Digital" />
<meta property="fb:app_id" content="837048030488285" />

      <title>
        Transformacion digital y Desarrollo de software en Queretaro
      </title>
    </Head>
    <Navbar />
    <div>{props.children}</div>
  </div>
);

export default Container;
