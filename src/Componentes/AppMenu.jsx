import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './AppMenu.module.css';

// Exemplo básico dos dados — substitua pelos seus reais
const menuPorcao = [
  { id: 1, name: 'Batata Frita', imageurl: '/batata.jpg', price: 'R$15,00' },
  { id: 2, name: 'Frango à passarinho', imageurl: '/frango.jpg', price: 'R$25,00' }
];
const menuHamburguer = [
  { id: 1, name: 'Cheeseburguer', imageurl: '/cheese.jpg', price: 'R$20,00' }
];
const menuHotD = [
  { id: 1, name: 'Hot Dog Simples', imageurl: '/hotdog.jpg', price: 'R$12,00' }
];

// Responsividade do carousel
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

// Componente Card
function Card({ name, url, price }) {
  return (
    <div className={styles.card}>
      <img src={url} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

// Scroll suave
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Componente Principal
export function AppMenu() {
  const porcao = menuPorcao.map((item) => <Card key={item.id} {...item} />);
  const hamburguer = menuHamburguer.map((item) => <Card key={item.id} {...item} />);
  const hotdog = menuHotD.map((item) => <Card key={item.id} {...item} />);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Menu</h1>

      <div className={styles.categories}>
        <button onClick={() => scrollToSection('hamburguer')}>Hambúrgueres</button>
        <button onClick={() => scrollToSection('hotdog')}>Hot Dogs</button>
        <button onClick={() => scrollToSection('porcoes')}>Porções</button>
      </div>

      <section id="hamburguer" className={styles.section}>
        <h2 className={styles.titleSection}>Hambúrgueres</h2>
        <Carousel className={styles.carousel} infinite responsive={responsive}>
          {hamburguer}
        </Carousel>
      </section>

      <section id="hotdog" className={styles.section}>
        <h2 className={styles.titleSection}>Hot Dogs</h2>
        <Carousel className={styles.carousel} infinite responsive={responsive}>
          {hotdog}
        </Carousel>
      </section>

      <section id="porcoes" className={styles.section}>
        <h2 className={styles.titleSection}>Porções</h2>
        <Carousel className={styles.carousel} infinite responsive={responsive}>
          {porcao}
        </Carousel>
      </section>
    </div>
  );
}
