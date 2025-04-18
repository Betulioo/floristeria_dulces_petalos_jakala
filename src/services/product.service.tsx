import { Product } from "../context/ProductsContext";

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchProducts(): Promise<Product[]> {
  try {
      const response = await fetch(`${API_URL}api/v1/product`);
      console.log(response);
    if (!response.ok) {
      throw new Error("Error fetching products");
    }
      const data = await response.json();
    return data as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
export async function fetchProductById(id: string): Promise<Product> {
    try {
        const response = await fetch(`${API_URL}api/v1/product/${id}`);
        if (!response.ok) {
        throw new Error("Error fetching product by ID");
        }
        const data = await response.json();
        return data as Product;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        throw error;
    }
    }