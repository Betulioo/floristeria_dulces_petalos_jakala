import React from "react";


interface ProductImgProps {
    imgUrl: string;
    alt: string;
    className?: string;
}
const ProductImg: React.FC<ProductImgProps> = ({ imgUrl, alt, className }) => {
    return (
        <img src={imgUrl} alt={alt} className={`rounded-xs ${className}`} />
    );
}
export default ProductImg;