import React from "react";
import { Product } from '../../context/ProductsContext';
import styles from './ProductCard.module.scss';
import arrow from '../../assets/icons/arrow.png';
import { Link } from 'react-router-dom';
import ProductImg from "../ProductImg/ProductImg";

interface ProductCardProps {
    id: string;
    product: Product
}


const ProductCard: React.FC<ProductCardProps> = ({ id, product }) => {
   

    return (
        <div className={`${styles['product-card']} bg-color-neutral-100 shadow-E10 rounded-xs pl-xs pr-xs `} key={id}>
            <div className={styles['product-info']}>
            <h4 className="h4 font-nunito fw-bold text-color-neutral-1000">{product.name}</h4>
                <p className="b-1 font-dm-sans fw-regular text-color-neutral-800">{product.binomialName}</p>
                </div>
            <div className={`${styles['product-image-container']} rounded-xs`}>
                <ProductImg imgUrl={product.imgUrl} alt={product.name} />
                <div className={`${styles['product-image-info']}`}>
                        <div className={`${styles['product-image-info-price']} rounded-full bg-color-neutral-100`}>
                        <h6 className="h6 font-nunito fw-medium text-color-neutral-1000">€{product.price}</h6>
                        </div>
                    <Link to={`/product/${id}`}  className={styles['arrow-icon']} >
                        <img src={arrow} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;