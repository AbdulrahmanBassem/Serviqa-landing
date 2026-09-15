import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/serviqa logo blue.png'; 

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Image Logo */}
        <div className={styles.logo}>
          <a href="/#hero">
            <img src={logo} alt="Serviqa Logo" className={styles.logoImg} />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <a href="/#features" className={styles.link}>Features</a>
          <a href="/#how-it-works" className={styles.link}>How it Works</a>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </nav>

        {/* Call to Actions */}
        <div className={styles.actions}>
          {/* External link to the app */}
          <a 
            href="https://serviqa-app.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.loginBtn}
          >
            Login
          </a>
          
          {/* Internal route to the contact page */}
          <Link to="/contact" className={styles.demoBtn}>
            Request Demo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;