import styles from './Sobre.module.css';
import backgroundImage from '../assets/Img/jesson-mata-I2Erl2cU_A4-unsplash.jpg';
import companyImage from '../assets/Img/mathias-reding-H-8NJ0T_9Hk-unsplash.jpg';
export function Sobre(props) {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundContainer}>
                <h1 className={styles.title}>Sobre</h1>
                <img src={backgroundImage} alt="Sobre" className={styles.backgroundImage} />
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.storeContainer}>
                    <img src={companyImage} alt="Loja" className={styles.storeImage} />
                </div>
                <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>Sobre a Loja</h2>
                    <p>
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
                </div>
            </div>
        </div>
    );
}
