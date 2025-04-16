import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.infoFooter1}>
          <p>Horário de Funcionamento: Ter/Dom - 18:00 às 00:00</p>
          <p>Rua Humberto Mauro, nº 777, Centro, Cataguases-MG</p>
          <Link to="/contato">Fale conosco</Link>
        </div>
      </div>
      <section>
        <p className={styles.copyright}>© Mix Burguers</p>
      </section>
    </footer>
  );
}
