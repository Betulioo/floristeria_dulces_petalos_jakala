import React, { useEffect, useState } from "react";
import { Product } from "../../context/ProductsContext";
import { useParams } from 'react-router-dom';
import { fetchProductById } from "../../services/product.service";
import styles from "./ProductCardDetail.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductImg from "../ProductImg/ProductImg";



const ProductCardDetail: React.FC = () => {
   const { id } = useParams<{ id: string }>();     // ← aquí lees el param
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);   
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchProductById(id)
      .then(p => setProduct(p))
      .catch(err => setError(err.message))
        .finally(() => { setLoading(false); localStorage.setItem('productName', JSON.stringify(product?.name)); })
  }, [id, product?.name]); // ← aquí usas el param
    
    const handlefertilizerType = (fertilizerType: string) => {
        switch (fertilizerType) {
            case 'phosphorus':
                return ' Fertilizar con fosforo';
            case 'nitrogen':
                return ' Fertilizar con nitrógeno';
            
            default:
                return fertilizerType;
        }
    }
    const handleWateringsPerWeek = (wateringsPerWeek: number) => {

        if (wateringsPerWeek === 1) {
            return ' Regar una vez por semana';
        }else if (wateringsPerWeek > 1) {
            return ` Regar ${wateringsPerWeek} veces por semana`;
        }else if (wateringsPerWeek === 0) {
            return ' No necesita riego';
        }else {
            return ' Riego no especificado';
        }
    }
    
     if (loading)  return <p>Cargando detalles…</p>;
  if (error)    return <p>Error: {error}</p>;
  if (!product) return <p>Producto no encontrado</p>; 
    return (
        <>
                
                <div className={`${styles['product-detail']}`}>
                            <Breadcrumbs />
                    
                <ProductImg imgUrl={product.imgUrl} alt={product.name} />
                <div className={`${styles['product-detail__container']}`}>
                <div className={`${styles['product-detail__container--text']}`}>
                <h1 className={`${product.name.length > 5 ? 'h2': 'h1'} font-nunito fw-bold text-color-neutral-1000`}>{product.name}</h1>
                    <p className="b-1 font-dm-sans fw-regular text-color-neutral-800">{product.binomialName}</p>
                    </div>

                    <h4 className={`h4 font-nunito fw-bold text-color-neutral-1000`}>€{product.price}</h4>
                    <ul className={`b-2 font-dm-sans fw-regular text-color-neutral-1000 pl-xs`}>
                        <li><span>{ handleWateringsPerWeek(product.wateringsPerWeek) }</span></li>
                        <li><span>{ handlefertilizerType(product.fertilizerType) }</span></li>
                    </ul>
                    <button className={`bg-color-accent-600 pt-2xs pr-xs pb-2xs pl-xs rounded-full font-dm-sans b-2 text-color-neutral-100`}>Añadir al carrito</button>
                    </div>
            </div>
            </>
    );
}

export default ProductCardDetail;