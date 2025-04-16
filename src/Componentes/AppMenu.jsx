import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { menuPorcao, menuHamburguer, menuHotD, responsive } from './dataMenu.js';
import { Hamburguers, HotD, Porcoes } from './Menu.jsx';
import styles from './AppMenu.module.css';

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

export function AppMenu() {
  const porcao = menuPorcao.map((item) => (
    <Porcoes key={item.id} name={item.name} url={item.imageurl} price={item.price} />
  ));

  const hamburguer = menuHamburguer.map((item) => (
    <Hamburguers key={item.id} name={item.name} url={item.imageurl} price={item.price} />
  ));

  const hotdog = menuHotD.map((item) => (
    <HotD key={item.id} name={item.name} url={item.imageurl} price={item.price} />
  ));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Menu</h1>

      <section id="hamburguer" className={styles.section}>
        <h2 className={styles.titleSection}>Hambúrgueres</h2>
        <Carousel className={styles.carousel} infinite={true} responsive={responsive}>
          {hamburguer}
        </Carousel>
      </section>

      <section id="hotdog" className={styles.section}>
        <h2 className={styles.titleSection}>Hot Dogs</h2>
        <Carousel className={styles.carousel} infinite={true} responsive={responsive}>
          {hotdog}
        </Carousel>
      </section>

      <section id="porcoes" className={styles.section}>
        <h2 className={styles.titleSection}>Porções</h2>
        <Carousel className={styles.carousel} infinite={true} responsive={responsive}>
          {porcao}
        </Carousel>
      </section>
    </div>
  );
}
