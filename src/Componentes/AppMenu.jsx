import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { menuPorcao, menuHamburguer, menuHotD, responsive } from './dataMenu.js';
import { Hamburguers, HotD, Porcoes } from './Menu.jsx';
import styles from './AppMenu.module.css';

export function AppMenu() {
  const porcao = menuPorcao.map((item) => <Porcoes key={item.id} name={item.name} url={item.imageurl} price={item.price} />);
  const hamburguer = menuHamburguer.map((item) => <Hamburguers key={item.id} name={item.name} url={item.imageurl} price={item.price} />);
  const hotdog = menuHotD.map((item) => <HotD key={item.id} name={item.name} url={item.imageurl} price={item.price} />);

  return (
    <div>
      <h1 className={styles.title}>Menu</h1>
      <h2 className={styles.titleSection}>Hambúrguers</h2>
      <Carousel className={styles.app} infinite={true} responsive={responsive}>
        {hamburguer}
      </Carousel>
      <h2 className={styles.titleSection}>Hot Dogs</h2>
      <Carousel className={styles.app} infinite={true} responsive={responsive}>
        {hotdog}
      </Carousel>
      <h2 className={styles.titleSection}>Porções</h2>
      <Carousel className={styles.app} infinite={true} responsive={responsive}>
        {porcao}
      </Carousel>
    </div>
  );
}
