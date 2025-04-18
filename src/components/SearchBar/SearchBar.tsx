import React from "react";
import { useProducts } from "../../context/ProductsContext";
import styles from "./SearchBar.module.scss";


const SearchBar: React.FC = () => {
 const {
    state: { search },
    dispatch,
  } = useProducts();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    dispatch({ type: "SET_SEARCH", payload: term });
  };
    
    return (
    <div className={`${styles['search-bar']} pt-2xs pr-xs pb-2xs pl-xs rounded-2xs bg-color-neutral-100 `}>
      <input
        type="text"
        className={`${styles['search-bar__input']} b-1 font-dm-sans fw-regular text-color-neutral-800`}
        placeholder="Busca en nuestra tienda"
        value={search}
        onChange={handleInputChange}
      />
    </div>
    );
}
export default SearchBar;