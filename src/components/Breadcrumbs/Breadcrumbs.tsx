// src/components/Breadcrumbs/Breadcrumbs.tsx
import React from 'react';
import { Link,useParams } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { useProducts } from '../../context/ProductsContext';



const Breadcrumbs: React.FC = () => {
  const { state } = useProducts();
  const { id } = useParams<{ id: string }>();
    


  // Construye cada nivel acumulando la ruta
  const crumbs = [
    { name: 'Inicio', path: '/' }
  ];
  if (id) {
    // Buscar el producto por ID en el contexto
    const product = state.products.find(p => p.id === id);
    crumbs.push({
      name: product ? product.name : 'Producto no encontrado',
      path: `/product/${id}`
    });
  }

  return (
 <nav className={`${styles.breadcrumb}`} aria-label="Breadcrumb">
      {crumbs.map((crumb, idx) => (
        <React.Fragment key={crumb.path}>
          {idx > 0 && <span className={styles.separator}>›</span>}
          <Link to={crumb.path} className={`${styles.link} font-dm-sans fw-regular text-color-neutral-800`}>
            {crumb.name}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
