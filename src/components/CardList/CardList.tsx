import React, { useEffect } from 'react';
import { useProducts } from '../../context/ProductsContext';
import { fetchProducts } from '../../services/product.service';
import ProductCard from '../ProductCard/ProductCard';
import styles from './CardList.module.scss';

const CardList: React.FC = () => {
    const { state, dispatch } = useProducts();
    const { products, filtered, loading, error,search } = state;

    useEffect(() => {
        const load = async () => {
            dispatch({ type: "SET_LOADING", payload: true });
            try {
                const products = await fetchProducts();
                dispatch({ type: "SET_PRODUCTS", payload: products });
            } catch (error) {
                dispatch({ type: "SET_ERROR", payload: "Error al cargar los productos" });
                console.log(error);
            
                
            }
            finally {
                dispatch({ type: "SET_LOADING", payload: false });
            }

        }
        load();
    }, [dispatch])
    
    if (loading) {
        return <div>Cargando...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (filtered.length === 0 && search) {
        return <div>No hay productos disponibles para "{search}"</div>;
    }

    if (filtered.length > 0) {
        return (
            <div className={`${styles['card-list']} ${styles['grid-container']}`}>
                {filtered.map((product) => (
                    <ProductCard key={product.id} id={product.id} product={product} />
                ))}
            </div>
        );
    }


  return (
    <div className={`${styles['card-list']} ${styles['grid-container']} `}>
      <h2>Lista de Tarjetas</h2>
          {/* Aquí puedes agregar tus tarjetas */}
          {products.map((product) => (
              <ProductCard key={product.id} id={product.id} product={product} />
          ))}
    </div>
  );
}

export default CardList;