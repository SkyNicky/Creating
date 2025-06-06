import React from "react";
import styles from "./Sobre.module.css";
import backgroundImage from "../assets/Img/jesson-mata-I2Erl2cU_A4-unsplash.jpg";
import companyImage from "../assets/Img/mathias-reding-H-8NJ0T_9Hk-unsplash.jpg";

export function Sobre() {
  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <div className={styles.backgroundContainer}>
        <img
          src={backgroundImage}
          alt="Sobre"
          className={styles.backgroundImage}
        />
        <h1 className={styles.title}>Sobre</h1>
      </div>

      {/* Conteúdo principal */}
      <div className={styles.contentContainer}>
        {/* Imagem da Loja */}
        <div className={styles.storeContainer}>
          <img
            src={companyImage}
            alt="Loja"
            className={styles.storeImage}
          />
        </div>

        {/* Texto de conteúdo */}
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>Sobre a Loja</h2>
          <p className={styles.paragraph}>
            No Mix Burguers, buscamos proporcionar uma experiência gastronômica única, oferecendo uma variedade de hambúrgueres, hot dogs e porções deliciosas. Nossa lanchonete tem como objetivo ser um ponto de encontro acolhedor para amigos e famílias desfrutarem de refeições saborosas em um ambiente descontraído.
          </p>

          <h2 className={styles.subtitle}>Missão</h2>
          <p className={styles.paragraph}>
            Nossa missão é proporcionar momentos de prazer através da comida, oferecendo produtos de alta qualidade. Estamos comprometidos proporcionando um serviço excepcional e um ambiente acolhedor que promova a convivência e a felicidade.
          </p>

          <h2 className={styles.subtitle}>Visão</h2>
          <p className={styles.paragraph}>
            Buscamos ser reconhecidos não apenas pela qualidade dos nossos produtos, mas também pela nossa dedicação ao serviço ao cliente e pela nossa contribuição positiva para o bem-estar da comunidade local.
          </p>

          <h2 className={styles.subtitle}>Valores</h2>
          <p className={styles.paragraph}>
            No Mix Burguers, prezamos pela qualidade, inovação, e pela satisfação de nossos clientes. Buscamos sempre a transparência em todas as nossas relações, o respeito aos nossos colaboradores e o cuidado com o ambiente. Acreditamos que, além de servir bem, nossa responsabilidade social e ambiental é fundamental para construir um futuro melhor para todos.
          </p>
        </div>
      </div>
    </div>
  );
}
