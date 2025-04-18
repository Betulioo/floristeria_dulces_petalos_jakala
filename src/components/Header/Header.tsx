import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/logos/floristeria_logo.svg';

/**
 * Header component: muestra el logo enlazado al home.
 * Se apoya en el sistema de diseño SCSS para estilos, espaciados y colores.
 */
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Floristería Logo" className={styles.logo} />
      </Link>
    </header>
  );
};

export default Header;